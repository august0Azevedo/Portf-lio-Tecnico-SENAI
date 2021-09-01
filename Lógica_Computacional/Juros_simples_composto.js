public class Juros1 {
    
    public static void main(String[] args) {
        Programa();
    }
    public static void Programa(){
        double m = 0;
        double j = 0;
        String juros = JOptionPane.showInputDialog("Digite S para juros simples\nC para juros compostos");
        double Capital = Double.parseDouble(JOptionPane.showInputDialog("Digite o capital inicial"));
        double Taxa = Double.parseDouble(JOptionPane.showInputDialog("Digite a taxa"))/100;
        int Tempo = Integer.parseInt(JOptionPane.showInputDialog("Digite o tempo"));
        
        if(juros.equals("c")||juros.equals("C")){
            m = Capital*Math.pow((1+Taxa),Tempo);
            j = m - Capital;
        } 
        else if (juros.equals("s") || juros.equals("S")){
            j = Capital*Taxa*Tempo;
            m = Capital+j;
        }
            JOptionPane.showMessageDialog(null, "Juros: "+j+ "\nMontante: "+m);
    
    
          
    }
    
}

