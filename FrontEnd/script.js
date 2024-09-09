const api = axios.create({
    baseURL: 'http://localhost:4000', 
  });
  
  document.getElementById('formCadastro').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const aniversario = document.getElementById('aniversario').value;
  
    const pessoaData = {
      nome,
      cpf,
      telefone,
      aniversario,
    };
  
    try {
      const response = await api.post('/api/criarcadastro', pessoaData);
      
      if (response.status === 200) {
        document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
        document.getElementById('formCadastro').reset();
      } else {
        document.getElementById('message').innerText = `Erro: ${response.data.message}`;
      }
    } catch (error) {
      document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
      console.error('Erro:', error);
    }
  });
  