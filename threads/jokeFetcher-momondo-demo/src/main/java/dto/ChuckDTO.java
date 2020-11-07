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
public class ChuckDTO 
{
    private String url;
    private String id;
    private String created_at;
    private String value;

    public ChuckDTO(String url, String id, String created_at, String value) 
    {
        if(url != null || url.isEmpty())
        {
            this.url = url;
        } else
        {
            this.url = "https://api.chucknorris.io/jokes/random";
        }
        this.id = id;
        this.created_at = created_at;
        this.value = value;
    }

    public String getUrl() 
    {
        return url;
    }

    public String getId() 
    {
        return id;
    }

    public String getCreated_at() 
    {
        return created_at;
    }

    public String getValue() 
    {
        return value;
    }
    
    
    
}
