export interface IPosition {
  idCargo: number;
  nome: string;
  authority: string;
}

export interface IUserData {
  idUsuario: number;
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  dataDeNascimento: string;
  sexo: 'M' | 'F' | 'O';
  senha: string;
  cpf: string;
  descricao: string;
  ativo: 'S' | 'N';
}

export interface IUser extends IUserData {
  cargos: IPosition[];
}

export interface IAdmin extends IUserData {}

export interface ITeacher extends IUserData {}

export interface IStudent {
  idAluno: number;
  nomeAluno: string;
  sobrenomeAluno: string;
  dataNascimentoAluno: string;
  sexoAluno: string;
  pontuacao?: number;
}

export interface IModule {
  id: number;
  titulo: string;
  conteudo: string;
  idProfessor: number;
  classificacao: 'INICIANTE' | 'INTERMEDIARIO' | 'AVANÇADO';
  foiAprovado: string;
  admin: IAdmin;
  professor: ITeacher;
  ativo: string;
}

export interface IChallenge {
  id: number;
  idModulo: number;
  titulo: string;
  conteudo: string;
  tipo: 'QUIZ' | 'JOGO';
  intrucao: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  alternativaCorreta: string;
  pontos: number;
  modulo: IModule;
  ativo: string;
}
