---
sidebar_position: 5
title: Suport a llm
description: How to incert a new type of LLM
---

To include a new llm, simply create a factory for it with the parameters: apikey and model, using the "registerFactory" decorator and add it to the providerEnvMap hashmap of the LangWise class.