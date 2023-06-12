import java.util.Scanner;

public class calc_fatorial{

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("Desenvolvido por Andr\u00E9 Meneses // FATEC SJC - Banco de Dados // 1 Semestre // 2023\n");
        System.out.println("OBS: Valores altos resultarao em numeros negativos ou 0, pois o resultado sera maior que a capacidade da variavel.\n");
        System.out.print("Digite um numero: ");
        int x = Integer.parseInt(input.next());
        int num = x;

        if(x == 0){
            System.out.println(num + "! = 1");
        }else{
            String calc = Integer.toString(x);

            int y = x -1;
            long resultado = x;

            while(y != 0){
                calc = calc +" * "+ y;
                resultado = resultado * y;
                y--;
                
            }
            System.out.println("\nFatorial");
            System.out.println(num + "! = " +calc + " = " + resultado);
        }

    }
}
