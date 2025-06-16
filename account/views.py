from account.auth_utils import *
from account.serializers import *
from account.authentication import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class LoginUserView(APIView):
    def post(self, request):
        serializer = LoginUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            tokens = get_tokens_for_user(user)

            return Response({
                "message": "Login successful.",
                "tokens": tokens,
                "user": {
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "phone_number": user.phone_number,
                    "student_id": user.student_id
                }
            }, status=status.HTTP_200_OK)
        return Response({
            "message": "Login failed.",
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class RegisterUserView(APIView):
    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "message": "User registered successfully.",
                "user": {
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "phone_number": user.phone_number,
                    "student_id": user.student_id
                }
            }, status=status.HTTP_201_CREATED)
        return Response({
            "message": "Registration failed.",
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class VerifyUserTokenView(APIView):
    """
    Verify JWT access token and return the authenticated user's profile.
    """
    authentication_classes = [UserJWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user, context={'request': request})
        return Response(
            {"detail": "Token is valid", "user": serializer.data},
            status=status.HTTP_200_OK
        )

class UserLogoutView(APIView):
    """
    Stateless logout. Does NOT validate or blacklist the refresh token.
    Simply instructs client to discard it.
    """
    authentication_classes = [UserJWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        refresh_token = request.data.get("refresh")

        if not refresh_token:
            return Response(
                {"detail": "Refresh token is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # No validation/decoding to avoid relying on jti, OutstandingToken, etc.
        return Response(
            {"detail": "Logout successful. Please discard refresh token on client side."},
            status=status.HTTP_200_OK
        )