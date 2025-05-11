---
sidebar_position: 1
title: Overview
---
Com intuito de modularizar, gerar reuso e simplificar o entendimento do código fonte do Spark, criamos uma lib que faz todo o processamento das gerações dos back-end's.
Passamos todo conceito dos geradores de back-end que antes era feito dentro do Spark pra dentro da lib spark-generators-lib, deixando apenas uma arquivo dentro de cada respectiva pasta dentro do spark, apenas referenciado a chamada da lib e mantendo o processamento.

