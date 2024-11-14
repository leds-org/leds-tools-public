---
title: "Learn OpenFGA Basics"
sidebar_position: 7
---

# Getting Started with OpenFGA and Docker:

```
docker pull openfga/openfga && docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 openfga/openfga run
```

With this command, OpenFGA will be running on `localhost:8080`.

## Creating a Store:

```bash
curl -X POST localhost:8080/stores -d '{ "name": "MY-STORE" }'
```

You can check if it was correctly created using the following command:

```bash
curl -X GET localhost:8080/stores
```

If the store was created successfully, this command should return all the store information. We will need the "id" returned by this command, so save it if necessary.

## Creating an Authorization Model:

Authorization models define the types and relationships we will have in our application:

```sh
curl -X POST localhost:8080/stores/{STORE-ID}/authorization-models -d '{  
  "type_definitions":[  
    { "type":"user" },  
    {   
		"type":"document",   
		"relations": {   
			"reader": { "this":{} },   
			"writer": { "this":{} }  
		},  
		"metadata":{  
			"relations":{  
				"reader":{"directly_related_user_types":[{"type":"user"}]},  
				"writer":{"directly_related_user_types":[{"type":"user"}]}  
			}  
		}  
	}  
	],  
  "schema_version": "1.1"  
}'
```

To verify if it worked correctly, use this command:

```bash
curl -X GET localhost:8080/stores/{STORE-ID}/authorization-models
```

If created successfully, this command should return all the authorization model details of that store.

## Creating a Relationship Tuple:

Relationship tuples are where we define relationships (permissions). Here, we will define that the user "joao" has permission to write on the document "001":

```sh
curl -X POST localhost:8080/stores/{STORE-ID}/write -d '{  
  "writes": {  
    "tuple_keys": [  
      {  
        "user": "user:joao",  
        "relation": "writer",  
        "object": "document:001"  
      }  
    ]  
  },  
  "authorization_model_id": "{AUTHORIZATION-MODEL-ID}"  
}'
```

Note that the authorization model has one ID, and the store has another ID different from the authorization model.

## Validating Permissions:

Now, we will test if the user "joao" has permission to write on document 001:

```sh
curl -X POST localhost:8080/stores/{STORE-ID}/check -d '{  
  "tuple_key": {  
      "user": "user:joao",  
      "relation": "writer",  
      "object": "document:001"  
      }  
  },  
  "authorization_model_id": "{AUTHORIZATION-MODEL-ID}"  
}'
```
