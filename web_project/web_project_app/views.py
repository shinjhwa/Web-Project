from django.shortcuts import render
from .forms import LoginForm

def login_view(request):
    form = LoginForm()
    return render(request, 'login.html', {'form': form})

# def login_view(request):
#    return render(request, 'login.html') 
