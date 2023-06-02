print("Desenvolvido por André Meneses // FATEC SJC - Banco de Dados // 1 Semestre // 2023\n")

comparar = int(input("Digite 1 para tabela verdade E(ʌ)\nDigite 2 para tabela verdade OU(v)\n"))

while((comparar < 1) or (comparar > 2)):
    comparar = int(input("Por favor, digite um valor valido.\nDigite 1 para tabela verdade E(ʌ)\nDigite 2 para tabela verdade OU(v)\n"))
var1 = input("Digite o nome da primeira variável: ")
var2 = input("Digite o nome da segunda variável: ")


print(f"\nTabela verdade para {var1} e {var2}:")

if(comparar == 1):
    print(f"{var1}\t{var2}\t{var1}ʌ{var2}")
else:
    print(f"{var1}\t{var2}\t{var1}v{var2}")
print(f"-------------------------")

# Realizacao das verificacoes

#Tanto nas variaveis valor1 e valor2, sao atribuidas uma array com duas posicoes, sendo elas F e V
for valor1 in [0, 1]:
    for valor2 in [0, 1]:

        #Os dois comandos for sao responsaveis por percorrer as posicoes de cada array

        #O metodo eval no python identifica uma operacao em string e retorna o resultado

        if(comparar == 1):
            resultado = eval(f"{valor1} and {valor2}")
        else:
            resultado = eval(f"{valor1} or {valor2}")

        if(valor1 == 0):
            res1 = "F"
        else:
            res1 = "V"

        if(valor2 == 0):
            res2 = "F"
        else:
            res2 = "V"

        if(resultado == 0):
            resfinal = "F"
        else:
            resfinal = "V"
        print(f"{res1}\t{res2}\t{resfinal}")