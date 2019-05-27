# padrao-angular
Repositório usado para compartilhar a padronização de código para projetos Angular

1. `Ctrl+Shift+I` (vscode) -> Identação;

2. Verificar imports não utilizados;

3. Comentario de classe (Estilo javadoc);

4. Verificar nomenclatura dos arquivos/selector/classes;

Considerando uma entidade `Xpto`:

Component:
	Arquivos (hyphen-case): `xpto-form.component.ts` | `xpto-form.component.html` | `xpto-form.component.scss`
	Classe (CamelCase): `XptoFormComponent`
	Selector (hyphen-case): `xpto-form`
	Quando se tratar de uma dialog/popup adicionar `-dialog` ao fim dos nomes e no selector. ex: `xpto-form-dialog.component.ts`
	
Service:
	Arquivo (hyphen-case): `xpto.service.ts`
	Classe (CamelCase): `XptoService`

Module:
	Arquivo (hyphen-case): `xpto.module.ts`
	Classe (CamelCase): `XptoModule`
	
Pipe:
	Arquivo (hyphen-case): `xpto.pipe.ts`
	Classe (CamelCase): `XptoPipe`
	Name (camelCase primeira letra minuscula): `xpto`
	
Directive:
	Arquivo (hyphen-case): `xpto.directive.ts`
	Classe (CamelCase): `XptoDirective`
	Selector (camelCase primeira letra minuscula): `xpto`
	
5. Verificar o import de css e manter apenas caso o component tenha um css próprio (estilos devem ser 1-1 com componentes e não devem ser compartilhados);

6. Verificar dependencias injetadas não utilizadas;

7. Padronizar a injecao de dependencias:

```javascript
constructor(
	private xptoService: XptoService
){}
```

8. Verificar a implementação do metodo `ngOnInit` e a assinatura da classe (`implements OnInit`);

9. Propriedades e métodos não devem ter comentarios estilo javadoc, apenas comentários para o entendimento da funcionalidade se necessário;

10. Identação dos arquivos .html dos components

11. Componentes devem ser especializados. Por exemplo um componente `xpto-list-item` deve ser usado apenas para renderizar 1 item da lista de xpto's e nada além disso;

