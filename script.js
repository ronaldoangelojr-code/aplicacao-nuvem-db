// Dados do Supabase

const supabaseUrl = "https://akklyvczmadwgoytvhkc.supabase.co";

const supabaseKey = "sb_publishable_VMI75MtXpvlWDkeZnmm-aw_t0RsH5hL";


const banco = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

let idEditando = null;



// Buscar contatos

async function carregarContatos(nome = ""){


    let consulta = banco
        .from("contato")
        .select("*")
        .order("id");



    if(nome.trim() !== ""){

        consulta = consulta.ilike(
            "nome",
            `%${nome}%`
        );

    }



    const { data, error } = await consulta;



    if(error){

        console.log(error);
        return;

    }



    const tabela = document.getElementById(
        "tabela-contato"
    );


    tabela.innerHTML = "";



    data.forEach(contato => {


        tabela.innerHTML += `

        <tr>

            <td>${contato.id}</td>

            <td>${contato.nome}</td>

            <td>${contato.telefone}</td>

            <td>${contato.email}</td>


            <td>
                ${new Date(contato.dtcontato)
                .toLocaleDateString("pt-BR")}
            </td>


            <td>
                ${contato.obs ?? ""}
            </td>


            <td>
                <button onclick="editarContato(${contato.id})">
                    ✏️
                </button>
            </td>


            <td>
                <button onclick="excluirContato(${contato.id})">
                    🗑️
                </button>
            </td>


        </tr>

        `;


    });

}

//Executa ao abrir a página

carregarContatos();

async function salvarContato(event){

    event.preventDefault();

    const contato = {

        nome: document.getElementById("nome").value,

        telefone: document.getElementById("telefone").value,

        email: document.getElementById("email").value,

        obs: document.getElementById("obs").value

    };

    let resultado;

    if(idEditando){


        resultado = await banco
            .from("contato")
            .update(contato)
            .eq("id", idEditando);


    } else {


        resultado = await banco
            .from("contato")
            .insert([contato]);

    }



    if(resultado.error){

        console.log(resultado.error);

        alert("Erro ao salvar");

        return;

    }



    alert(
        idEditando 
        ? "Contato atualizado!"
        : "Contato cadastrado!"
    );



    idEditando = null;


    document
        .getElementById("form-contato")
        .reset();



    document.querySelector(
        "button[type='submit']"
    ).innerText = "Salvar";



    carregarContatos();

}

    async function editarContato(id){


    const { data, error } = await banco
        .from("contato")
        .select("*")
        .eq("id", id)
        .single();



    if(error){

        console.log(error);
        return;

    }



    idEditando = id;


    document.getElementById("nome").value = data.nome;

    document.getElementById("telefone").value = data.telefone;

    document.getElementById("email").value = data.email;

    document.getElementById("obs").value = 
        data.obs ?? "";



    document.querySelector("button[type='submit']")
        .innerText = "Atualizar";


}

async function excluirContato(id){


    const confirmar = confirm(
        "Deseja realmente excluir este contato?"
    );


    if(!confirmar){
        return;
    }



    const { error } = await banco
        .from("contato")
        .delete()
        .eq("id", id);



    if(error){

        console.log("Erro ao excluir:", error);

        alert("Não foi possível excluir");

        return;

    }



    alert("Contato excluído com sucesso!");


    carregarContatos();

}

function buscarContato(){


    const nome = document
        .getElementById("buscar-nome")
        .value;



    carregarContatos(nome);

}

document
    .getElementById("form-contato")
    .addEventListener(
        "submit",
        salvarContato
    );