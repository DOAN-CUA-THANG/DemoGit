/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author A
 */
public class DBconnection {
    
    Connection cn=null;

    public DBconnection() throws ClassNotFoundException {
       Class.forName("com.mysql.cj.jdbc.Driver");
        String url= "jdbc:mysql://localhost:3306/qlhocvien";
      String  user="root";
       String pass="";
        try {
          this.cn= DriverManager.getConnection(url,user,pass);
        } catch (SQLException ex) {
            Logger.getLogger(DBconnection.class.getName()).log(Level.SEVERE, null, ex);
        }
         
        
    }
    public ResultSet LayDL (String sql){
        ResultSet rs=null;
        
        Statement st;
        try {
            st = cn.createStatement(); 
            rs=st.executeQuery(sql);
           
        } catch (SQLException ex) {
            Logger.getLogger(DBconnection.class.getName()).log(Level.SEVERE, null, ex);
        }
       return rs;
    }
    public void CloseData(){
        if(cn==null)
        
            System.out.println("ket noi khong thanh cong");
        try {
            cn.close();
        } catch (SQLException ex) {
            Logger.getLogger(DBconnection.class.getName()).log(Level.SEVERE, null, ex);
        }
          
        
    }
    
     public int updateData (String sql){
         Statement st=null;
         int t=-1;
        try {
            st = cn.createStatement(); 
          
          t= st.executeUpdate(sql);
        } catch (SQLException ex) {
            Logger.getLogger(DBconnection.class.getName()).log(Level.SEVERE, null, ex);
        }
        return t;
     }
    
}
