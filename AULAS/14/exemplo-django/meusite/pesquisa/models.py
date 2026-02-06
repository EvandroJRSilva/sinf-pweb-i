from django.db import models

class Pergunta(models.Model):
    pergunta_texto = models.CharField(max_length=200)
    data_pub = models.DateTimeField("data de publicação")

class Alternativa(models.Model):
    pergunta = models.ForeignKey(Pergunta, on_delete=models.CASCADE)
    alternativa_texto = models.CharField(max_length=200)
    votos = models.IntegerField(default=0)