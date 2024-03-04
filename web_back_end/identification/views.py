from django.shortcuts import render

from django.db import models
from django.contrib.auth.models import User

class Document(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    document = models.FileField(upload_to='documents/')
    status = models.CharField(max_length=10, choices=(('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')), default = 'pending')
    approved_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='approver')
    upload_date = models.DateTimeField(auto_now_add=True)