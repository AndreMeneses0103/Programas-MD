print("Desenvolvido por André Meneses // FATEC SJC - Banco de Dados // 1 Semestre // 2023\n")

letra_conjunto1 = input("Digite a letra do primeiro conjunto: \n")
letra_conjunto2 = input("Digite a letra do segundo conjunto: \n")


conjunto1 = input("Digite os elementos do primeiro conjunto (use , para separar): \n")
conjunto2 = input("Digite os elementos do segundo conjunto (use , para separar): \n")

conjunto1 = conjunto1.split(",")
conjunto2 = conjunto2.split(",")

produto = []
for elemento1 in conjunto1:
    for elemento2 in conjunto2:
        produto.append((elemento1, elemento2))
        
produto = (str(produto)).replace("[", "{")
produto = produto.replace("]", "}")


print(f"O produto cartesiano dos conjuntos fornecidos sao:\n {letra_conjunto1.upper()}x{letra_conjunto2.upper()} = {produto}")