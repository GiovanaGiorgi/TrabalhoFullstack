const axios = require('axios');
const { Cadastro } = require('../models');


exports.createCadastro = async (req, res) => {
    try { debugger
        console.log('Requisição recebida');
        const { nome, cpf, telefone, aniversario} = req.body;
        
        console.log('Dados do formulário:', nome, cpf, telefone, aniversario);
        
        try {
            const novoCadastro = await Cadastro.create({
                nome,
                cpf,
                telefone,
                aniversario,
            });
            console.log('Cadastro criado com sucesso');
            res.status(201).json(novoCadastro);
        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            res.status(500).json({ error: 'Erro ao criar cadastro', details: error.message });
        }
    } catch (error) {
        console.error('Erro ao processar requisição:', error);
        res.status(500).json({ error: 'Erro ao processar requisição', details: error.message });
    }
};

exports.getAllCadastros = async (req, res) => {
    try {
        const cadastros = await Cadastro.findAll();
        res.status(200).json(cadastros);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message});
    }
};

exports.getCadastroById = async (req, res) => {
    try {
        const { Id } = req.params;
        const cadastro = await Cadastro.findByPk(Id);

        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado'});
        }

        res.status(200).json(cadastro);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message});
    }
}

exports.updateCadastro = async (req, res) => {
    try {
        const { Id } = req.params;
        const {nome, cpf, telefone, aniversario} = req.body;

        const cadastro = await Cadastro.findByPk(Id);

        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado'})
        }

        cadastro.nome, 
        cadastro.cpf, 
        cadastro.telefone, 
        cadastro.aniversario,

        await cadastro.save();
        
        res.status(200).json(cadastro)
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}

exports.deleteCadastro = async (req, res) => {
    try {
        const { Id } = req.params;
        const cadastro = await Cadastro.findByPk(Id)

        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado'})
        }

        await cadastro.destroy();

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}