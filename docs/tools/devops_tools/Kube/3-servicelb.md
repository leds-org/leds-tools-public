# Como subir uma aplicação Flask no Kubernetes com Load Balancer:

Crie um arquivo chamado `flask-deployment.yaml` com o seguinte conteúdo:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: flask-deployment
  labels:
    app: flask
spec:
  replicas: 2
  selector:
    matchLabels:
      app: flask
  template:
    metadata:
      labels:
        app: flask
    spec:
      containers:
      - name: flask
        image: heilima/kubernetes-flask
        ports:
        - containerPort: 5000
```

Aplique o arquivo no Kubernetes:

```bash
kubectl apply -f flask-deployment.yaml
```

Crie o serviço de Load Balancer (flask-service.yaml):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: flask-service
spec:
  selector:
    app: flask
  ports:
    - protocol: TCP
      port: 80
      targetPort: 5000
```

Aplique o arquivo no Kubernetes:

```bash
kubectl apply -f flask-service.yaml
```
se você estiver usando o Minikube, você pode acessar a aplicação com o comando:

```bash
kubectl get svc
```

Você verá o IP do Load Balancer, acesse o IP Externo no seu navegador e você verá a aplicação Flask rodando.

flask-service   LoadBalancer   10.43.122.28   10.128.129.10   80:32143/TCP   4d
