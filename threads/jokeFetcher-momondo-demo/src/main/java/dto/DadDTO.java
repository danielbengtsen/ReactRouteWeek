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
public class DadDTO 
{
    private String url;
    private String id;
    private String joke;

    public DadDTO(String url, String id, String joke) 
    {
        if(url != null || url.isEmpty())
        {
            this.url = url;
        } else
        {
            this.url = "https://icanhazdadjoke.com";
        }
        this.id = id;
        this.joke = joke;
    }

    public String getUrl() 
    {
        return url;
    }

    public String getId() 
    {
        return id;
    }

    public String getJoke() 
    {
        return joke;
    }
    
    
    
}
