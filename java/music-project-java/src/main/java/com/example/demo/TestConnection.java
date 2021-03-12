
package com.example.demo;

import java.sql.DriverManager;

public class TestConnection {
    public TestConnection() {
    }

    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/music?useSSL=false&serverTimezone=UTC";
        String user = "music_DB";
        String password = "music_DB";

        try {
            System.out.println("Connecting to database: " + jdbcUrl);
            DriverManager.getConnection(jdbcUrl, user, password);
            System.out.println("Connection successful!!!");
        } catch (Exception var5) {
            var5.printStackTrace();
        }

    }
}
