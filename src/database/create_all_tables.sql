IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [usuario] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Senha] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_usuario] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220512212918_M01', N'6.0.5');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [usuario] DROP CONSTRAINT [PK_usuario];
GO

EXEC sp_rename N'[usuario]', N'usuarios';
GO

ALTER TABLE [usuarios] ADD CONSTRAINT [PK_usuarios] PRIMARY KEY ([Id]);
GO

CREATE TABLE [Clientes] (
    [Id] int NOT NULL IDENTITY,
    [cpf] nvarchar(max) NOT NULL,
    [Telefone] nvarchar(max) NOT NULL,
    [Logradouro] nvarchar(max) NOT NULL,
    [Bairro] nvarchar(max) NOT NULL,
    [Numero] nvarchar(max) NOT NULL,
    [Cidade] nvarchar(max) NOT NULL,
    [UF] nvarchar(max) NOT NULL,
    [CEP] nvarchar(max) NOT NULL,
    [UsuarioId] int NOT NULL,
    CONSTRAINT [PK_Clientes] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Clientes_usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [usuarios] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [Fornecedores] (
    [Id] int NOT NULL IDENTITY,
    [cpf] nvarchar(max) NOT NULL,
    [Telefone] nvarchar(max) NOT NULL,
    [Logradouro] nvarchar(max) NOT NULL,
    [Bairro] nvarchar(max) NOT NULL,
    [Numero] nvarchar(max) NOT NULL,
    [Cidade] nvarchar(max) NOT NULL,
    [UF] nvarchar(max) NOT NULL,
    [CEP] nvarchar(max) NOT NULL,
    [UsuarioId] int NOT NULL,
    CONSTRAINT [PK_Fornecedores] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Fornecedores_usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [usuarios] ([Id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_Clientes_UsuarioId] ON [Clientes] ([UsuarioId]);
GO

CREATE INDEX [IX_Fornecedores_UsuarioId] ON [Fornecedores] ([UsuarioId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220513013712_M02', N'6.0.5');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Clientes] DROP CONSTRAINT [FK_Clientes_usuarios_UsuarioId];
GO

ALTER TABLE [Fornecedores] DROP CONSTRAINT [FK_Fornecedores_usuarios_UsuarioId];
GO

DROP INDEX [IX_Fornecedores_UsuarioId] ON [Fornecedores];
GO

DROP INDEX [IX_Clientes_UsuarioId] ON [Clientes];
GO

CREATE TABLE [Orcamento] (
    [Id] int NOT NULL IDENTITY,
    [Pedido] nvarchar(max) NOT NULL,
    [ValorOrcamento] nvarchar(max) NOT NULL,
    [Fornecedor] nvarchar(max) NOT NULL,
    [orcamentoAprovado] nvarchar(max) NOT NULL,
    [Data] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Orçamento] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Pedidos] (
    [Id] int NOT NULL IDENTITY,
    [Cliente] nvarchar(max) NOT NULL,
    [TipoServiço] nvarchar(max) NOT NULL,
    [Descrição] nvarchar(max) NOT NULL,
    [UsuarioId] int NOT NULL,
    CONSTRAINT [PK_Pedidos] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [TipoServico] (
    [Id] int NOT NULL IDENTITY,
    [descricaoServico] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_TipoServico] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220604192056_M03', N'6.0.5');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [servico] (
    [Id] int NOT NULL IDENTITY,
    [NomeServico] nvarchar(max) NOT NULL,
    [DescricaoServico] nvarchar(max) NOT NULL,
    [Orcamento] nvarchar(max) NOT NULL,
    [ValorEstimadoServico] nvarchar(max) NOT NULL,
    [DataAprovacaoOrcamento] nvarchar(max) NOT NULL,
    [DataConclusaoDoServico] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_servico] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220607010919_M04', N'6.0.5');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [usuarios] ADD [Role] nvarchar(max) NOT NULL DEFAULT N'';
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220619215845_M05', N'6.0.5');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

EXEC sp_rename N'[Pedidos].[TipoServiço]', N'TipoServico', N'COLUMN';
GO

EXEC sp_rename N'[Pedidos].[Descrição]', N'Descricao', N'COLUMN';
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220626181121_M06', N'6.0.5');
GO

COMMIT;
GO

