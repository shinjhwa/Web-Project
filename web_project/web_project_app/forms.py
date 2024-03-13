from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label='아이디', widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': '아이디'}))
    password = forms.CharField(label='비밀번호', widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': '비밀번호'}))
