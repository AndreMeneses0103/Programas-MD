import java.util.Scanner;

public class calc_fatorial{

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("Digite um numero: ");
        int x = Integer.parseInt(input.next());
        int num = x;

        String calc = Integer.toString(x);

        int y = x -1;

        while(y != 0){
            calc = calc +" * "+ y;
            x = x * y;
            y--;
            
        }
        System.out.println("Fatorial");
        System.out.println(num + "! = " +calc + " = " + x);
    }
}
