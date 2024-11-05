# Tutorial de resolução do problema da VPN

A VPN, às vezes, pode ter certo problema de rota. E o Notepad, sendo o PÉSSIMO editor de texto que ele é, impede você de editar o arquivo de configuração por conta desse arquivo ser protegido com privilégios de administrador.

Portanto, a solução é usar o VSCode (ou migrar para o Linux).

Abra o arquivo (pelo menu do VSCode) em `C:\Program Files\OpenVPN\config`

No fim do arquivo, adicione as seguintes rotas:
```
route 10.128.128.0 255.255.128.0
route 10.255.248.0 255.255.252.0
route 192.168.211.0 255.255.255.0 10.255.248.1
route 192.168.128.0 255.255.192.0 10.255.248.1
```

Salve e dê permissão de admin para o VSCode. Reinicie sua máquina, os erros devem sumir.

Siga o resto dos passos do [Tutorial](vpn.md)