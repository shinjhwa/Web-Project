from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import CustomUser #사용자 모델을 CustomUser라고 명명

@require_http_methods(["POST"])
def check_username(request):
    username = request.POST.get("username")
    exists = CustomUser.objects.filter(username=username).exists()
    return JsonResponse({"exists" : exists})
