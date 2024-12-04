Ingress is a Kubernetes resource that allows the exposure of HTTP and HTTPS services outside the cluster. It is a resource that enables the configuration of routing rules based on host and path. Ingress is an application-level resource and can be configured to provide load balancing, SSL, and virtual hosting.

## Installing the Ingress Controller

It comes pre-installed with Rancher. To install Rancher, follow the [tutorial](./1-rancher.md).

## Configuring Ingress:

To deploy our application, use this file:

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

An example of an Ingress service:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
    name: flask-ingress
    annotations:
        kubernetes.io/ingress.class: "nginx"
spec:
    rules:
    - host: testepaulo.leds.dev.br  # Replace with your domain
        http:
            paths:
            - path: /
                pathType: Prefix
                backend:
                    service:
                        name: flask-service  # Name of your Flask service
                        port:
                            number: 5000  # The port exposed by your Flask service
```