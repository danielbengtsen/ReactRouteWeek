/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

/**
 *
 * @author Danie
 */
public class CombinedDTO 
{
    private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;

    public CombinedDTO(ChuckDTO chuck, DadDTO dad) 
    {
        this.joke1 = chuck.getValue();
        this.joke1Reference = chuck.getUrl();
        this.joke2 = dad.getUrl();
        this.joke2Reference = dad.getUrl();
    }

    public String getJoke1() 
    {
        return joke1;
    }

    public String getJoke1Reference() 
    {
        return joke1Reference;
    }

    public String getJoke2() 
    {
        return joke2;
    }

    public String getJoke2Reference() 
    {
        return joke2Reference;
    }

    
    
    
    
    
}
