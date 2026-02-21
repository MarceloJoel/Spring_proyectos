package controller;

import model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.ClientesService;

@CrossOrigin("*")
@RestController
public class ClientesController {
    @Autowired
    ClientesService clientesService;
    @GetMapping(value="autenticar", produces = MediaType.APPLICATION_JSON_VALUE)
    public Cliente autenticar(@RequestParam("usuario") String usuario,@RequestParam("password") String password){
        return clientesService.autenticarCliente(usuario, password);
    }

    @PostMapping(value="registrar", consumes =  MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registrar(@RequestBody Cliente cliente){
        if(clientesService.registrarCliente(cliente)){
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}
