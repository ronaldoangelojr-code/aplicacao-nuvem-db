// Dados do Supabase

const supabaseUrl = "https://akklyvczmadwgoytvhkc.supabase.co";

const supabaseKey = "sb_publishable_VMI75MtXpvlWDkeZnmm-aw_t0RsH5hL";


const banco = supabase.createClient(
    supabaseUrl,
    supabaseKey
);



// Buscar contatos

async function carregarContatos(){


    const { data, error } = await banco
        .from("contato")
        .select("*")
        .order("id");


    if(error){

        console.log("Erro:", error);
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
            
            <td>${contato.obs}</td>

            <td>
                ${new Date(contato.dtcontato)
                .toLocaleDateString("pt-BR")}
            </td>


            <td>
                ✏️
            </td>


            <td>
                🗑️
            </td>


        </tr>

        `;


    });


}



// Executa ao abrir a página

carregarContatos();