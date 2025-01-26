--
-- PostgreSQL database dump
--

-- Dumped from database version 12.19
-- Dumped by pg_dump version 12.19

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO brajan;

--
-- Name: aba; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.aba (
    id_sistema integer NOT NULL,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_modulo integer NOT NULL,
    nome_modulo text NOT NULL
);


ALTER TABLE public.aba OWNER TO brajan;

--
-- Name: aba_id_modulo_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.aba_id_modulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.aba_id_modulo_seq OWNER TO brajan;

--
-- Name: aba_id_modulo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.aba_id_modulo_seq OWNED BY public.aba.id_modulo;


--
-- Name: aula; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.aula (
    id_aula integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    nome_aula text NOT NULL,
    cliente boolean NOT NULL,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.aula OWNER TO brajan;

--
-- Name: aula_id_aula_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.aula_id_aula_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.aula_id_aula_seq OWNER TO brajan;

--
-- Name: aula_id_aula_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.aula_id_aula_seq OWNED BY public.aula.id_aula;


--
-- Name: faq; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.faq (
    id_faq integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer,
    nome_faq text NOT NULL,
    link text NOT NULL,
    observacao text,
    "order" integer,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.faq OWNER TO brajan;

--
-- Name: faq_id_faq_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.faq_id_faq_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.faq_id_faq_seq OWNER TO brajan;

--
-- Name: faq_id_faq_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.faq_id_faq_seq OWNED BY public.faq.id_faq;


--
-- Name: franquia; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.franquia (
    id_franquia integer NOT NULL,
    nome text NOT NULL,
    responsavel text NOT NULL,
    telefone text,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE public.franquia OWNER TO brajan;

--
-- Name: franquia_id_franquia_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.franquia_id_franquia_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.franquia_id_franquia_seq OWNER TO brajan;

--
-- Name: franquia_id_franquia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.franquia_id_franquia_seq OWNED BY public.franquia.id_franquia;


--
-- Name: modulo; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.modulo (
    id_modulo integer NOT NULL,
    id_sistema integer NOT NULL,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL,
    nome_submodulo text NOT NULL
);


ALTER TABLE public.modulo OWNER TO brajan;

--
-- Name: modulo_id_submodulo_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.modulo_id_submodulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.modulo_id_submodulo_seq OWNER TO brajan;

--
-- Name: modulo_id_submodulo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.modulo_id_submodulo_seq OWNED BY public.modulo.id_submodulo;


--
-- Name: mv_aula; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.mv_aula (
    id_mv_aula integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer NOT NULL,
    id_usuario integer NOT NULL,
    id_franquia integer NOT NULL,
    data_visto timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.mv_aula OWNER TO brajan;

--
-- Name: mv_aula_id_mv_aula_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.mv_aula_id_mv_aula_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mv_aula_id_mv_aula_seq OWNER TO brajan;

--
-- Name: mv_aula_id_mv_aula_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.mv_aula_id_mv_aula_seq OWNED BY public.mv_aula.id_mv_aula;


--
-- Name: mv_faq; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.mv_faq (
    id_mv_faq integer NOT NULL,
    id_faq integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer NOT NULL,
    id_usuario integer NOT NULL,
    id_franquia integer NOT NULL,
    data_visto timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.mv_faq OWNER TO brajan;

--
-- Name: mv_faq_id_mv_faq_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.mv_faq_id_mv_faq_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mv_faq_id_mv_faq_seq OWNER TO brajan;

--
-- Name: mv_faq_id_mv_faq_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.mv_faq_id_mv_faq_seq OWNED BY public.mv_faq.id_mv_faq;


--
-- Name: mv_prova; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.mv_prova (
    id_mv_prova integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_usuario integer NOT NULL,
    id_franquia integer NOT NULL,
    id_prova integer NOT NULL,
    nota double precision NOT NULL,
    data_visto timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.mv_prova OWNER TO brajan;

--
-- Name: mv_prova_id_mv_prova_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.mv_prova_id_mv_prova_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mv_prova_id_mv_prova_seq OWNER TO brajan;

--
-- Name: mv_prova_id_mv_prova_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.mv_prova_id_mv_prova_seq OWNED BY public.mv_prova.id_mv_prova;


--
-- Name: mv_questao; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.mv_questao (
    id_mv_questao integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer,
    id_prova integer,
    id_usuario integer NOT NULL,
    id_franquia integer NOT NULL,
    id_questao integer NOT NULL,
    certo_errado text NOT NULL,
    data_visto timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.mv_questao OWNER TO brajan;

--
-- Name: mv_questao_id_mv_questao_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.mv_questao_id_mv_questao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mv_questao_id_mv_questao_seq OWNER TO brajan;

--
-- Name: mv_questao_id_mv_questao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.mv_questao_id_mv_questao_seq OWNED BY public.mv_questao.id_mv_questao;


--
-- Name: mv_release; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.mv_release (
    id_mv_release integer NOT NULL,
    id_release integer NOT NULL,
    id_usuario integer NOT NULL,
    data_visto timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.mv_release OWNER TO brajan;

--
-- Name: mv_release_id_mv_release_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.mv_release_id_mv_release_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mv_release_id_mv_release_seq OWNER TO brajan;

--
-- Name: mv_release_id_mv_release_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.mv_release_id_mv_release_seq OWNED BY public.mv_release.id_mv_release;


--
-- Name: mv_video; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.mv_video (
    id_mv_video integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer,
    id_usuario integer NOT NULL,
    id_franquia integer NOT NULL,
    id_video integer NOT NULL,
    data_visto timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.mv_video OWNER TO brajan;

--
-- Name: mv_video_id_mv_video_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.mv_video_id_mv_video_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mv_video_id_mv_video_seq OWNER TO brajan;

--
-- Name: mv_video_id_mv_video_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.mv_video_id_mv_video_seq OWNED BY public.mv_video.id_mv_video;


--
-- Name: planejamento; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.planejamento (
    id_planejamento integer NOT NULL,
    nome_planejamento text NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_submodulo integer NOT NULL,
    id_usuario integer NOT NULL,
    modulo_novo boolean,
    previsao_inicio timestamp(3) without time zone,
    previsao_fim timestamp(3) without time zone,
    etapa_elicitacao boolean,
    etapa_roteiro boolean,
    etapa_video boolean,
    etapa_validacao boolean,
    etapa_finalizado boolean,
    proposta text,
    roteiro text,
    impedimentos text,
    observacoes text,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE public.planejamento OWNER TO brajan;

--
-- Name: planejamento_id_planejamento_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.planejamento_id_planejamento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planejamento_id_planejamento_seq OWNER TO brajan;

--
-- Name: planejamento_id_planejamento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.planejamento_id_planejamento_seq OWNED BY public.planejamento.id_planejamento;


--
-- Name: prova; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.prova (
    id_prova integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    nome_prova text NOT NULL,
    cliente boolean NOT NULL,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer
);


ALTER TABLE public.prova OWNER TO brajan;

--
-- Name: prova_id_prova_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.prova_id_prova_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prova_id_prova_seq OWNER TO brajan;

--
-- Name: prova_id_prova_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.prova_id_prova_seq OWNED BY public.prova.id_prova;


--
-- Name: questao; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.questao (
    id_questao integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer,
    questao text NOT NULL,
    "alternativa_A" text NOT NULL,
    "alternativa_B" text NOT NULL,
    "alternativa_C" text,
    "alternativa_D" text,
    correta text NOT NULL,
    observacao text NOT NULL,
    "order" integer,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL,
    id_prova integer
);


ALTER TABLE public.questao OWNER TO brajan;

--
-- Name: questao_id_questao_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.questao_id_questao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.questao_id_questao_seq OWNER TO brajan;

--
-- Name: questao_id_questao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.questao_id_questao_seq OWNED BY public.questao.id_questao;


--
-- Name: release; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.release (
    id_release integer NOT NULL,
    numero_release integer NOT NULL,
    versao_gestores text NOT NULL,
    versao_sincdata text NOT NULL,
    versao_gestorpdv text NOT NULL,
    versao_balcao text NOT NULL,
    id_usuario integer NOT NULL,
    data_inclusao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    finalizado boolean DEFAULT false NOT NULL
);


ALTER TABLE public.release OWNER TO brajan;

--
-- Name: release_id_release_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.release_id_release_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.release_id_release_seq OWNER TO brajan;

--
-- Name: release_id_release_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.release_id_release_seq OWNED BY public.release.id_release;


--
-- Name: release_item; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.release_item (
    id_item_release integer NOT NULL,
    nome_release text NOT NULL,
    numero_release integer NOT NULL,
    id_release integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_submodulo integer NOT NULL,
    correcao boolean,
    alteracao boolean,
    imagem text,
    observacao text,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE public.release_item OWNER TO brajan;

--
-- Name: release_item_id_item_release_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.release_item_id_item_release_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.release_item_id_item_release_seq OWNER TO brajan;

--
-- Name: release_item_id_item_release_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.release_item_id_item_release_seq OWNED BY public.release_item.id_item_release;


--
-- Name: sistema; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.sistema (
    id_sistema integer NOT NULL,
    nome_sistema text NOT NULL,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE public.sistema OWNER TO brajan;

--
-- Name: sistema_id_sistema_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.sistema_id_sistema_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sistema_id_sistema_seq OWNER TO brajan;

--
-- Name: sistema_id_sistema_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.sistema_id_sistema_seq OWNED BY public.sistema.id_sistema;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    email text NOT NULL,
    login text NOT NULL,
    senha text NOT NULL,
    id_franquia integer NOT NULL,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    nome_usuario text NOT NULL,
    tipo_usuario text NOT NULL
);


ALTER TABLE public.usuario OWNER TO brajan;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_usuario_seq OWNER TO brajan;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- Name: video; Type: TABLE; Schema: public; Owner: brajan
--

CREATE TABLE public.video (
    id_video integer NOT NULL,
    id_sistema integer NOT NULL,
    id_modulo integer NOT NULL,
    id_aula integer,
    nome_video text NOT NULL,
    link text NOT NULL,
    observacao text,
    "order" integer,
    data_criacao timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    data_inativo timestamp(3) without time zone,
    status boolean DEFAULT true NOT NULL,
    id_submodulo integer NOT NULL
);


ALTER TABLE public.video OWNER TO brajan;

--
-- Name: video_id_video_seq; Type: SEQUENCE; Schema: public; Owner: brajan
--

CREATE SEQUENCE public.video_id_video_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.video_id_video_seq OWNER TO brajan;

--
-- Name: video_id_video_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brajan
--

ALTER SEQUENCE public.video_id_video_seq OWNED BY public.video.id_video;


--
-- Name: aba id_modulo; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aba ALTER COLUMN id_modulo SET DEFAULT nextval('public.aba_id_modulo_seq'::regclass);


--
-- Name: aula id_aula; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aula ALTER COLUMN id_aula SET DEFAULT nextval('public.aula_id_aula_seq'::regclass);


--
-- Name: faq id_faq; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.faq ALTER COLUMN id_faq SET DEFAULT nextval('public.faq_id_faq_seq'::regclass);


--
-- Name: franquia id_franquia; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.franquia ALTER COLUMN id_franquia SET DEFAULT nextval('public.franquia_id_franquia_seq'::regclass);


--
-- Name: modulo id_submodulo; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.modulo ALTER COLUMN id_submodulo SET DEFAULT nextval('public.modulo_id_submodulo_seq'::regclass);


--
-- Name: mv_aula id_mv_aula; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula ALTER COLUMN id_mv_aula SET DEFAULT nextval('public.mv_aula_id_mv_aula_seq'::regclass);


--
-- Name: mv_faq id_mv_faq; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq ALTER COLUMN id_mv_faq SET DEFAULT nextval('public.mv_faq_id_mv_faq_seq'::regclass);


--
-- Name: mv_prova id_mv_prova; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova ALTER COLUMN id_mv_prova SET DEFAULT nextval('public.mv_prova_id_mv_prova_seq'::regclass);


--
-- Name: mv_questao id_mv_questao; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao ALTER COLUMN id_mv_questao SET DEFAULT nextval('public.mv_questao_id_mv_questao_seq'::regclass);


--
-- Name: mv_release id_mv_release; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_release ALTER COLUMN id_mv_release SET DEFAULT nextval('public.mv_release_id_mv_release_seq'::regclass);


--
-- Name: mv_video id_mv_video; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video ALTER COLUMN id_mv_video SET DEFAULT nextval('public.mv_video_id_mv_video_seq'::regclass);


--
-- Name: planejamento id_planejamento; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.planejamento ALTER COLUMN id_planejamento SET DEFAULT nextval('public.planejamento_id_planejamento_seq'::regclass);


--
-- Name: prova id_prova; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.prova ALTER COLUMN id_prova SET DEFAULT nextval('public.prova_id_prova_seq'::regclass);


--
-- Name: questao id_questao; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao ALTER COLUMN id_questao SET DEFAULT nextval('public.questao_id_questao_seq'::regclass);


--
-- Name: release id_release; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release ALTER COLUMN id_release SET DEFAULT nextval('public.release_id_release_seq'::regclass);


--
-- Name: release_item id_item_release; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release_item ALTER COLUMN id_item_release SET DEFAULT nextval('public.release_item_id_item_release_seq'::regclass);


--
-- Name: sistema id_sistema; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.sistema ALTER COLUMN id_sistema SET DEFAULT nextval('public.sistema_id_sistema_seq'::regclass);


--
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- Name: video id_video; Type: DEFAULT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.video ALTER COLUMN id_video SET DEFAULT nextval('public.video_id_video_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
00f0ec44-7bf5-47dc-8785-51a94f6e1cbf	219c763805612c268ebb1b4ba3a76293935ff33919f30f91e01fbbe7384d1293	2024-10-27 08:56:15.6885-03	20241027115615_usuario	\N	\N	2024-10-27 08:56:15.273606-03	1
b43bddc0-27ca-413f-91cb-2ed694ffa0fc	02dfff2fa0eb4e1ad91556385cfc2d4f82d73788d98e19b3adf0a4d65a23bc52	2024-10-27 09:02:55.217363-03	20241027120255_usuario_1	\N	\N	2024-10-27 09:02:55.151189-03	1
8f0dd52c-a750-42c9-a3e0-8b9588e5627d	811d36690525685c87dc4510d0a5cdebf9d73b0afc5c7581c563e4de52cb66a1	2024-12-23 06:12:42.244596-03	20241223091242_release	\N	\N	2024-12-23 06:12:42.141889-03	1
385d93f0-6c80-4574-8141-2a8c156a1a7b	efa98c90715af370b0892bdf2aa57e49ab61a36d8645f7389acee639a4a33516	2024-10-27 10:37:11.242192-03	20241027133711_usuario2	\N	\N	2024-10-27 10:37:11.092331-03	1
32cc02ad-f9b1-4875-baea-b72a5b838bc4	9a65cc0cc659f9dcafaeabfa12ff489aef15f5d2e99ab2ae812df6e61e8ca13a	2024-10-27 10:39:42.64501-03	20241027133942_usuario3	\N	\N	2024-10-27 10:39:42.626515-03	1
c4619ffc-9b12-4e87-901b-1b1e82c5c125	0d575fc53d20f1cf7e86fb1d79e6ae57e58e12260d913b4d69a3831cbb9270fe	2024-10-28 08:09:34.903602-03	20241028110933_cadastros	\N	\N	2024-10-28 08:09:33.789713-03	1
2264b7f7-c41f-4360-b617-30d6e3a63937	f8a30e7cd3060541469fa0804a2ee75f2b08cc4b0d8c862d05040afc5aeca06d	2024-12-23 06:38:16.717293-03	20241223093816_release	\N	\N	2024-12-23 06:38:16.710445-03	1
8430c7ee-a0cd-4cde-adb2-a2378a695669	e90b1698c32ffa604c293827dcd1147c9670552bb4211dab5aa9479092d3952d	2024-10-31 12:15:15.488488-03	20241031151514_completo_1	\N	\N	2024-10-31 12:15:14.468492-03	1
3a750cad-989c-42a0-9840-11ff9cf9cce6	346a438841908708abe7355765c1cab567fca70a5273c45bf9d2c4c6aff55b6e	2024-11-06 08:18:56.115277-03	20241106111856_geral1	\N	\N	2024-11-06 08:18:56.086756-03	1
7fe8b052-bea3-4e7c-950c-2e41d4d7420e	c11f90a42f477fd06360f4e44a0dfa9db9fd10e327d8ca136d09818973f06fb7	2024-12-15 13:24:10.656838-03	20241215162409_submodulo	\N	\N	2024-12-15 13:24:09.650142-03	1
8572b939-2e2a-4dc3-af0a-8aad3809f2d3	afe0a42c47b3ff992159fdb051677cadb78b31a8994fb5d06ae0e8d277a1c9fc	2024-12-25 07:33:13.29313-03	20241225103311_	\N	\N	2024-12-25 07:33:11.348464-03	1
ab973ec0-e967-4a6e-8600-9859a991520b	dfdd3fe984a9d49c7b80c2239f23ce26f96a96e31909850b71d440271c46661e	2024-12-21 07:50:20.17646-03	20241221105019_planejamento	\N	\N	2024-12-21 07:50:19.671748-03	1
dbd03915-ff9f-4fb2-803f-ab7ee791a076	f032f0fce89f257ff6e787e7eb80b68983c58eec9f209373c8f1f946e8fe8775	2024-12-21 08:57:08.994182-03	20241221115708_release	\N	\N	2024-12-21 08:57:08.834507-03	1
4a7ed929-ee18-42cc-b867-c9b2076e31cd	623d3098abfd51b554d0d562be3646c2e92dc8f037b3282409f19a5932856113	2024-12-21 11:16:14.524757-03	20241221141614_submodulo	\N	\N	2024-12-21 11:16:14.448455-03	1
d9f14c32-14f8-4f2a-9541-fd39258dc74c	9c5670f45f5089624d94a53339df17225f8c18dd0935c2afddca4e84b97ed682	2024-12-25 07:56:47.987142-03	20241225105647_	\N	\N	2024-12-25 07:56:47.966795-03	1
3074f891-8405-4a98-ac72-b0bfc997acbf	ef224b86767167d305683f517e6944b79175179ea6c5150db558af9dbeda97cf	2024-12-21 16:19:58.650686-03	20241221191958_aula	\N	\N	2024-12-21 16:19:58.55657-03	1
c32eacbe-0ef4-41ed-8014-a3cae7a76665	83239ed6ed3e30c6f7a7296c03c4d46f83f11fad8cfc9088d277d9574aebca1d	2024-12-22 01:39:26.62658-03	20241222043926_video	\N	\N	2024-12-22 01:39:26.3145-03	1
dafd52b0-76b8-4490-915c-99e8c39f9771	24d656a5cfcb8d26bd74281de863a9c409367114bc6ca3b2997b1ba7ddefed0e	2024-12-23 05:32:29.048196-03	20241223083228_prova	\N	\N	2024-12-23 05:32:28.841034-03	1
4420ed99-3c25-4734-af00-64a716ef8dac	e597377e2c24f4b168b8172b6c0ce2271ae8f64464536d27c77d3bda65f85596	2024-12-25 07:59:07.636053-03	20241225105907_	\N	\N	2024-12-25 07:59:07.360487-03	1
1992e74c-e094-4a9a-bd14-acac22676468	ea0683a6273bcad5cfec8a51f2d6385d4c02e05fff9c2b7bbccf69fe3e476219	2024-12-25 10:30:51.963628-03	20241225133051_	\N	\N	2024-12-25 10:30:51.891378-03	1
1ef47493-bce4-4227-a3b6-1136f6566d2d	11fb7ddfb56bd96c84d62cc3199c209d78a0495bceb569e0329e2bb58467da14	2024-12-25 13:02:51.067223-03	20241225160251_	\N	\N	2024-12-25 13:02:51.03506-03	1
3d2c776b-6c1d-4ac1-877a-faeb314e4eca	af1f269e698d80d1375f9db5bac6e6cc98f22d5399468706daa130319bca0801	2024-12-25 13:06:42.836795-03	20241225160642_	\N	\N	2024-12-25 13:06:42.825941-03	1
b2036108-8c87-40c9-9898-4633ce75ee86	b0610fc4bde4b3524ca55e46390e95f889478396535a604c133349e838f69c31	2025-01-09 09:47:47.483043-03	20250109005442_mv_video	\N	\N	2025-01-09 09:47:47.458417-03	1
\.


--
-- Data for Name: aba; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.aba (id_sistema, data_criacao, data_inativo, status, id_modulo, nome_modulo) FROM stdin;
1	2025-01-06 12:46:47.967	\N	t	15	Arquivos
1	2025-01-06 12:51:35.456	\N	t	16	Estoque
1	2025-01-06 12:51:49.69	\N	t	17	Posto
1	2025-01-06 12:51:57.093	\N	t	18	Serviços
1	2025-01-06 12:52:09.314	\N	t	19	Transporte
1	2025-01-06 12:52:16.215	\N	t	20	Movimento
1	2025-01-06 12:52:24.065	\N	t	21	Financeiro
1	2025-01-06 12:52:40.484	\N	t	22	Gerencial
1	2025-01-06 12:52:47.907	\N	t	23	Produção
1	2025-01-06 12:52:57.756	\N	t	24	Só Varejo
1	2025-01-06 12:53:48.421	\N	t	25	Indicadores
1	2025-01-06 12:53:56.279	\N	t	26	Fiscal
1	2025-01-06 12:55:40.929	\N	t	27	Segurança
1	2025-01-06 12:55:52.171	\N	t	28	Parâmetros
1	2025-01-06 12:56:07.011	\N	t	29	Utilitários
1	2025-01-06 12:56:21.547	\N	t	30	Ajuda
4	2025-01-10 19:57:11.657	\N	t	31	Contagem Cega
4	2025-01-10 19:57:24.637	\N	t	32	Auditar Preços
12	2025-01-10 20:12:57.424	\N	t	33	Movimentação
12	2025-01-10 20:13:12.51	\N	t	34	Ordem de Serviço
12	2025-01-10 20:15:41.282	\N	t	35	Configurações
\.


--
-- Data for Name: aula; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.aula (id_aula, id_sistema, id_modulo, nome_aula, cliente, data_criacao, data_inativo, status, id_submodulo) FROM stdin;
1	1	22	Gerencial - Fluxo de Caixa\r\n	f	2025-01-09 15:09:01	\N	t	151
\.


--
-- Data for Name: faq; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.faq (id_faq, id_sistema, id_modulo, id_aula, nome_faq, link, observacao, "order", data_criacao, data_inativo, status, id_submodulo) FROM stdin;
8	1	22	\N	Fluxo de Caixa	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=473&artlang=pt-br	Explicação do Fluxo de Caixa	0	2025-01-07 17:56:04.726	\N	t	151
9	1	22	\N	Curva ABC	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=474&artlang=pt-br		0	2025-01-07 17:56:46.829	\N	t	152
10	1	22	\N	Comparativo de Venda	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=475&artlang=pt-br		0	2025-01-07 17:57:48.663	\N	t	153
11	1	22	\N	Comparativo de Markup	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=476&artlang=pt-br		0	2025-01-07 17:58:18.755	\N	t	154
12	1	22	\N	Análise de Produtos para Compra	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=477&artlang=pt-br		0	2025-01-07 17:58:44.409	\N	t	155
13	1	22	\N	Acompanhamento de Turnos	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=487&artlang=pt-br		0	2025-01-07 17:59:37.163	\N	t	156
14	1	22	\N	Demonstrativo de Resultado e Custo Operacional	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=478&artlang=pt-br		0	2025-01-07 18:00:20.879	\N	t	157
15	1	22	\N	Análise de Produtos Sem Vendas	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=479&artlang=pt-br		0	2025-01-07 18:00:52.679	\N	t	158
16	1	22	\N	Análise de Clientes Sem Comprar	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=480&artlang=pt-br		0	2025-01-07 18:01:26.433	\N	t	159
17	1	22	\N	Progressão de Vendas no Sistema	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=481&artlang=pt-br		0	2025-01-07 18:01:58.001	\N	t	160
18	1	22	\N	Análise do Comportamento da Loja	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=482&artlang=pt-br		0	2025-01-07 18:02:25.741	\N	t	161
19	1	22	\N	Comparativo de Perdas X Vendas	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=486&artlang=pt-br		0	2025-01-07 18:03:25.066	\N	t	162
20	1	22	\N	Comparativos de Parcelas de Clientes	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=485&artlang=pt-br		0	2025-01-07 18:04:02.709	\N	t	163
21	1	22	\N	Análise de Cruzamento de Produtos Vendidos	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=484&artlang=pt-br		0	2025-01-07 18:04:23.873	\N	t	164
22	1	22	\N	Resumo Financeiro por Forma de Pagamento	http://faq.eadbrajan.com.br/index.php?action=faq&cat=1&id=488&artlang=pt-br		0	2025-01-07 18:05:02.111	\N	t	165
23	1	15	\N	Cadastro de Filial		Todas as funcionalidades do Cadastro de Filiais	0	2025-01-10 11:47:30.622	\N	t	11
7	1	22	\N	Dashboard	C:\\ead\\backend\\src\\media\\faq\\7.html	Explicação do Dashboard	0	2025-01-07 17:55:11.55	\N	t	150
\.


--
-- Data for Name: franquia; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.franquia (id_franquia, nome, responsavel, telefone, data_criacao, data_inativo, status) FROM stdin;
1	Brajan	Brajan	2712345678	2024-10-27 10:55:34.818	2024-12-12 08:18:12.271	t
26	Monalisa	Monalisa	270000000	2025-01-10 21:00:11.112	\N	t
\.


--
-- Data for Name: modulo; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.modulo (id_modulo, id_sistema, data_criacao, data_inativo, status, id_submodulo, nome_submodulo) FROM stdin;
15	1	2025-01-06 12:46:59.965	\N	t	11	Filial
15	1	2025-01-06 12:58:59.34	\N	t	12	Clientes
15	1	2025-01-06 12:59:26.728	\N	t	13	Funcionários
15	1	2025-01-06 13:00:02.686	\N	t	14	Fornecedores
15	1	2025-01-06 13:00:22.517	\N	t	15	Transportadoras
15	1	2025-01-06 13:01:06.048	\N	t	16	Parceiros/Indicadores
15	1	2025-01-06 13:03:20.309	\N	t	17	Outros - Cadastro de Metas
15	1	2025-01-06 13:05:03.248	\N	t	18	Outros - Cadastro de setores
15	1	2025-01-06 13:05:21.193	\N	t	19	Outros - Cadastro de Taxas
15	1	2025-01-06 13:05:51.409	\N	t	20	Outros - Cadastro de Cargos
15	1	2025-01-06 13:06:45.657	\N	t	21	Outros - Cadastro de Feriados
15	1	2025-01-06 13:07:02.444	\N	t	22	Outros - Cadastro de Veículos
15	1	2025-01-06 13:07:20.437	\N	t	23	Outros - Cadastro de Unidades
15	1	2025-01-06 13:07:47.466	\N	t	24	Outros - Cadastro de Situações
15	1	2025-01-06 13:08:12.48	\N	t	25	Outros - Cadastro de Profissões
15	1	2025-01-06 13:08:29.553	\N	t	26	Outros - Cadastro de Montadoras
15	1	2025-01-06 13:09:16.302	\N	t	27	Outros - Cadastro de Serviços Diversos
15	1	2025-01-06 13:10:26.423	\N	t	28	Outros - Cadastro de Grupos de Desconto
15	1	2025-01-06 13:12:44.38	\N	t	29	Outros - Cadastro de Desconto - Crediário 
15	1	2025-01-06 13:13:41.53	\N	t	30	Outros - Cadastro de Forma de Pagamento
15	1	2025-01-06 13:17:37.26	\N	t	31	Outros - Frequência de Visita do Vendedor
15	1	2025-01-06 13:17:58.04	\N	t	32	Outros - Cadastro de Condições de Pagamento
15	1	2025-01-06 13:18:16.012	\N	t	33	Outros - Cadastro de Classificação de Clientes
15	1	2025-01-06 13:19:04.493	\N	t	34	Outros - Cadastro de Tipos de Contatos
15	1	2025-01-06 13:19:32.325	\N	t	35	Outros - Cadastro de Intermediador/Marketiplace
15	1	2025-01-06 13:19:57.461	\N	t	36	Outros - Cadastro de Box
15	1	2025-01-06 13:20:07.365	\N	t	37	Outros - Cadastro de Motivos
15	1	2025-01-06 13:20:20.995	\N	t	38	Outros - Cadastro de motivos de Cancelamento
15	1	2025-01-06 13:20:38.528	\N	t	39	Outros - Cadastro de Motivos de Devolução
15	1	2025-01-06 13:21:08.361	\N	t	40	Outros - Cadastro de Tipos de Telefones
15	1	2025-01-06 13:21:16.991	\N	t	41	Outros - Cadastro de Tipos de Endereços
15	1	2025-01-06 13:21:28.239	\N	t	42	Outros - Cadastro de Tipos de Fornecedores
15	1	2025-01-06 13:21:38.927	\N	t	43	Outros - Cadastro de Tipos de Documentos
15	1	2025-01-06 13:22:04.033	\N	t	44	Outros - Cadastro de Tipos de Dependentes
15	1	2025-01-06 13:22:25.007	\N	t	45	Outros - Formação de Cálculo de Preço
15	1	2025-01-06 13:24:28.964	\N	t	46	Tabelas - Cadastros de Países
15	1	2025-01-06 13:24:37.504	\N	t	47	Tabelas - Cadastros de Estados
15	1	2025-01-06 13:25:00.226	\N	t	48	Tabelas - Cadastros de Regiões
15	1	2025-01-06 13:25:25.233	\N	t	49	Tabelas - Tabela IBPT
15	1	2025-01-06 13:26:37.61	\N	t	50	Critérios - Ramos de Atividades
15	1	2025-01-06 13:27:00.374	\N	t	51	Critérios - Cadastros de Critérios
15	1	2025-01-06 13:27:20.495	\N	t	52	Critérios - Ramo de Atividade x Critério
16	1	2025-01-06 16:00:36.639	\N	t	53	Produto
16	1	2025-01-06 16:02:00.814	\N	t	54	Classificação de Produtos - Grupo/SubGrupo
16	1	2025-01-06 16:02:48.702	\N	t	55	Classificação de Produto - Cadastro de Marca
16	1	2025-01-06 16:03:10.033	\N	t	56	Classificação de Produto - Cadastro de Seções
16	1	2025-01-06 16:03:21.689	\N	t	57	Classificação de Produto - Cadastro de Coleções
16	1	2025-01-06 16:03:32.48	\N	t	58	Classificação de Produto - Cadastro de Segmentos
16	1	2025-01-06 16:04:07.984	\N	t	59	Classificação de Produto - Família de Produto
16	1	2025-01-06 16:04:31.378	\N	t	60	Classificação de Produto - Cadastro de Locais de Estoque
16	1	2025-01-06 16:51:28.708	\N	t	61	Grade de Produtos
16	1	2025-01-06 16:54:06.203	\N	t	62	Grade de Produtos - Cadastro de Tamanhos
16	1	2025-01-06 16:54:19.128	\N	t	63	Grade de Produtos - Cadastro de Cores
16	1	2025-01-06 16:55:11.666	\N	t	64	Cadastro de Kits
16	1	2025-01-06 16:55:29.869	\N	t	65	Gerenciamento de Promoções
16	1	2025-01-06 16:56:50.235	\N	t	66	Cadastro de Agregados
16	1	2025-01-06 16:57:29.297	\N	t	67	Manutenção de Preços
16	1	2025-01-06 16:57:59.518	\N	t	68	Cadastro de Observações
16	1	2025-01-06 16:58:32.379	\N	t	69	Cadastros de Receitas
16	1	2025-01-06 16:58:50.713	\N	t	70	Tabela de Preços
16	1	2025-01-06 16:59:05.281	\N	t	71	Balança - Exportação
16	1	2025-01-06 16:59:46.081	\N	t	72	Consulta de Preço
16	1	2025-01-06 17:00:06.332	\N	t	73	Consulta de Serial
16	1	2025-01-06 17:00:21.67	\N	t	74	Atualização de Preço
16	1	2025-01-06 17:00:40.585	\N	t	75	Inventário de Estoque
16	1	2025-01-06 17:01:05.228	\N	t	76	Produtos - Vendas/Faltas
16	1	2025-01-06 17:01:23.685	\N	t	77	Etiquetas de Produtos
16	1	2025-01-06 17:01:53.01	\N	t	78	Atualização ABC Farma
16	1	2025-01-06 17:02:20.077	\N	t	79	Posição de Estoque
16	1	2025-01-06 17:02:47.756	\N	t	80	Cadastro Mix de Produtos
16	1	2025-01-06 17:03:06.457	\N	t	81	Movimentação de Perda
16	1	2025-01-06 17:05:55.847	\N	t	82	Balanço - Cadastro de Balanços
16	1	2025-01-06 17:06:37.93	\N	t	83	Balanço - Contagem de Estoque
16	1	2025-01-06 17:06:57.893	\N	t	84	Balanço - Layout do Coletor
16	1	2025-01-06 17:10:29.276	\N	t	85	Tipos Fiscais - Tipo de Produto
16	1	2025-01-06 17:10:55.46	\N	t	86	Tipos Fiscais - Gênero de Produtos
16	1	2025-01-06 17:11:23.266	\N	t	87	Tipos Fiscais - Cadastro de Origem de Mercadoria
16	1	2025-01-06 17:11:45.512	\N	t	88	Cardápio Digital
17	1	2025-01-06 17:20:51.23	\N	t	89	Cadastro de Tanque
17	1	2025-01-06 17:20:59.183	\N	t	90	Cadastro de Bomba
17	1	2025-01-06 17:21:33.647	\N	t	91	Cadastro de Bicos
17	1	2025-01-06 17:22:20.822	\N	t	92	Medição de Tanque
17	1	2025-01-06 17:22:37.185	\N	t	93	Manutenção de LMC
18	1	2025-01-06 17:24:35.398	\N	t	94	Tipos de Serviço
18	1	2025-01-06 17:24:51.251	\N	t	95	Grupos de Serviços
18	1	2025-01-06 17:25:37.764	\N	t	96	Cadastro de Serviços
18	1	2025-01-06 17:25:54.538	\N	t	97	Nota Fiscal de Serviços
18	1	2025-01-06 17:26:10.844	\N	t	98	Veículos de terceiros
18	1	2025-01-06 17:26:37.213	\N	t	99	Situações de Ordem de Serviço
18	1	2025-01-06 17:27:23.214	\N	t	100	Tipos de Atendimento
18	1	2025-01-06 17:27:36.563	\N	t	101	Ordem de Serviço
18	1	2025-01-06 17:28:02.946	\N	t	102	Cadastro de Origens
19	1	2025-01-06 17:29:06.424	\N	t	103	Conhecimento de Transporte
19	1	2025-01-06 17:29:58.534	\N	t	104	Manifestação Eletrônico de Documentos Fiscais
33	12	2025-01-10 20:20:19.93	\N	t	287	Entrega
19	1	2025-01-06 17:30:23.676	\N	t	105	Solicitação de Transporte
19	1	2025-01-06 17:30:50.692	\N	t	106	Ordem de Coleta de Carga
19	1	2025-01-06 17:31:10.425	\N	t	107	Cadastro de Rotas
20	1	2025-01-06 17:34:27.73	\N	t	108	Notas de Venda
20	1	2025-01-06 17:35:13.722	\N	t	109	Manutenção de Condicional
20	1	2025-01-06 17:36:54.084	\N	t	110	Nota Fiscal Compra
20	1	2025-01-06 17:37:43.143	\N	t	112	Orçamento
20	1	2025-01-06 17:37:58.67	\N	t	113	Pedido de Compra
20	1	2025-01-06 17:38:07.7	\N	t	114	Pedido de Venda
20	1	2025-01-06 17:38:32.051	\N	t	115	Recebimento de Mercadoria
20	1	2025-01-06 17:58:28.924	\N	t	116	Movimentação de Produtos
20	1	2025-01-06 17:58:45.674	\N	t	117	Movimentar Estoque
20	1	2025-01-06 17:59:17.052	\N	t	118	Transferência entre Locais
20	1	2025-01-06 18:01:22.013	\N	t	119	Transferência entre Filiais
20	1	2025-01-06 17:37:10.107	\N	t	111	Nota Fiscal Emissão
20	1	2025-01-06 18:02:59.125	\N	t	120	Transformação de Estoque
20	1	2025-01-06 18:03:10.865	\N	t	121	Exportação de XML
21	1	2025-01-06 18:40:55.318	\N	t	122	Cadastro de Caixa
21	1	2025-01-06 18:41:11.331	\N	t	123	Movimento de Caixa
21	1	2025-01-06 18:41:27.56	\N	t	124	Saldo Caixa/Banco
21	1	2025-01-06 18:42:14.348	\N	t	125	Cadastro de Portadores
21	1	2025-01-06 18:42:39.981	\N	t	126	Cadastro de Espécie
21	1	2025-01-06 18:43:03.314	\N	t	127	Cadastro de Centro de Custos
21	1	2025-01-06 18:43:23.724	\N	t	128	Plano de Contas
21	1	2025-01-06 18:43:39.145	\N	t	129	Categorias de Plano de Contas
21	1	2025-01-06 18:44:01.555	\N	t	130	Grupos de Plano de Contas
21	1	2025-01-06 18:44:27.447	\N	t	131	Contas a Pagar
21	1	2025-01-06 18:44:49.572	\N	t	132	Contas a Receber
21	1	2025-01-06 18:45:23.458	\N	t	133	Monitoramento de Contas a Receber
21	1	2025-01-06 18:46:01.695	\N	t	134	Bancos - Bancos
21	1	2025-01-06 18:46:29.116	\N	t	135	Conta Corrente
21	1	2025-01-06 18:47:00.919	\N	t	136	Banco - Conta Corrente - Movimento
21	1	2025-01-06 18:47:30.949	\N	t	137	Banco - Cheques
21	1	2025-01-06 18:47:53.982	\N	t	138	Banco - Cadastro de Cedente
21	1	2025-01-06 18:48:26.029	\N	t	139	Manutenção de Boletos
21	1	2025-01-06 18:49:41.797	\N	t	140	Financeiras
21	1	2025-01-06 18:50:08.533	\N	t	141	Financeira - Baixa
21	1	2025-01-06 18:50:42.322	\N	t	142	Cartão - Administradoras de Cartão
21	1	2025-01-06 18:50:57.488	\N	t	143	Cartão - Cartão Baixa
21	1	2025-01-06 18:51:24.133	\N	t	144	Cartão - Conciliação de Cartão
21	1	2025-01-06 18:52:27.205	\N	t	145	Convênio - Cadastro de Convênio
21	1	2025-01-06 18:52:46.312	\N	t	146	Convênio - Convênio Baixa
21	1	2025-01-06 18:53:03.936	\N	t	147	Recibo Avulso
21	1	2025-01-06 18:53:24.231	\N	t	148	Emissão de Carta Cobrança
21	1	2025-01-06 18:53:41.776	\N	t	149	Controle de Vales
22	1	2025-01-06 18:54:46.974	\N	t	150	Dashboard
22	1	2025-01-06 18:54:58.068	\N	t	151	Fluxo de Caixa
22	1	2025-01-06 18:55:09.639	\N	t	152	Curva ABC
22	1	2025-01-06 18:55:28.51	\N	t	153	Comparativo de Vendas
22	1	2025-01-06 18:55:50.101	\N	t	154	Comparativo de Markup
22	1	2025-01-06 18:56:07.464	\N	t	155	Análise de Produtos para Compra
22	1	2025-01-06 18:56:32.762	\N	t	156	Acompanhamento de Turnos
22	1	2025-01-06 18:58:33.1	\N	t	157	Demonstrativos de Resultado/Custo Operacional
22	1	2025-01-06 18:58:53.476	\N	t	158	Análise de Produtos sem Vendas
22	1	2025-01-06 18:59:18.716	\N	t	159	Análise de Clientes Sem Comprar
22	1	2025-01-06 19:00:03.082	\N	t	160	Progressão de Vendas
22	1	2025-01-06 19:00:26.019	\N	t	161	Análise de Comportamento da Loja
22	1	2025-01-06 19:01:17.232	\N	t	162	Comparativo de Perdas x Vendas
22	1	2025-01-06 19:01:34.878	\N	t	163	Comparativo de Parcelas
22	1	2025-01-06 19:02:06.565	\N	t	164	Análise de Cruzamento de Produtos Vendidos
22	1	2025-01-06 19:02:31.012	\N	t	165	Resumo Financeiro por Forma de Pagamento
23	1	2025-01-06 19:04:24.13	\N	t	166	Cadastro Produto Acabado
23	1	2025-01-06 19:04:54.381	\N	t	167	Cadastro Matéria-prima 
23	1	2025-01-06 19:05:15.139	\N	t	168	Cadastro SubProdutos
23	1	2025-01-06 19:05:53.091	\N	t	169	Cadastro Embalagens
23	1	2025-01-06 19:06:09.708	\N	t	170	Cadastro Etapas
23	1	2025-01-06 19:06:34.188	\N	t	171	Cadastro Departamentos
23	1	2025-01-06 19:07:42.333	\N	t	172	Cadastro Outras Despesas
23	1	2025-01-06 19:08:08.11	\N	t	173	Calendário de Produção
23	1	2025-01-06 19:08:26.404	\N	t	174	Ordem de Produção
23	1	2025-01-06 19:08:52.727	\N	t	175	Registro de Controle da Produção e Estoque
23	1	2025-01-06 19:09:11.183	\N	t	176	Análise de Produtos Acabados
25	1	2025-01-06 19:12:47.863	\N	t	177	CAC - Controle e Acompanhamento de Clientes
25	1	2025-01-06 19:13:59.285	\N	t	178	CAM - Controle e Acompanhamento de Mídias
25	1	2025-01-06 19:14:28.964	\N	t	179	TVP - Tabela de Valor de Prestação
25	1	2025-01-06 19:15:18.124	\N	t	180	ADV - Acompanhamento Diário de Vendas
26	1	2025-01-06 19:17:23.385	\N	t	181	Sintegra
26	1	2025-01-06 19:17:43.298	\N	t	182	SPED ICMS/IPI
26	1	2025-01-06 19:18:17.109	\N	t	183	SPED Contribuições
26	1	2025-01-06 19:19:07.608	\N	t	184	Cadastro de ECF
26	1	2025-01-06 19:19:30.057	\N	t	185	ECF - Movimento Diário
26	1	2025-01-06 19:20:25.571	\N	t	186	Cadastro de Códigos ANP
26	1	2025-01-06 19:20:45.594	\N	t	187	Classificador Fiscal Manual
26	1	2025-01-06 19:21:06.41	\N	t	188	Cadastro de GNRE
26	1	2025-01-06 19:21:30.722	\N	t	189	CIAP - Cadastros de Bens
26	1	2025-01-06 19:22:16.707	\N	t	190	CIAP - Outros Créditos
26	1	2025-01-06 19:22:25.218	\N	t	191	CIAP - Perda
26	1	2025-01-06 19:22:58.747	\N	t	192	CIAP - Demonstrativo de Créditos
26	1	2025-01-06 19:25:02.386	\N	t	193	Apuração de ICMS - Ajustes de ICMS
26	1	2025-01-06 19:25:22.657	\N	t	194	Apuração de ICMS - Apuração de ICMS
26	1	2025-01-06 19:25:45.94	\N	t	195	Apuração de ICMS - Apuração de ICMS - ST
26	1	2025-01-06 19:26:13.39	\N	t	196	Apuração de ICMS - Informações adicionais da Apuração
26	1	2025-01-06 19:26:42.407	\N	t	197	Apuração de ICMS - Obrigações do ICMS a Recolher
26	1	2025-01-06 19:27:01.418	\N	t	198	Apuração de ICMS - Controle de Créditos Fiscais
26	1	2025-01-06 19:27:26.441	\N	t	199	Apuração de ICMS - Controle de Crédito de Estoque
26	1	2025-01-06 19:27:57.594	\N	t	200	Apuração de ICMS - Informações sobre Valores Agregados
26	1	2025-01-06 19:28:35.538	\N	t	201	Apuração de ICMS - Registro 1601 - Lançamentos
26	1	2025-01-06 19:31:03.703	\N	t	202	Apuração de ICMS DIFAL -  Apuração de ICMS Diferencial de Alíquota
26	1	2025-01-06 19:31:49.113	\N	t	203	Apuração de ICMS DIFAL - Ajustes/beneficio/Incentivo da Apuração
26	1	2025-01-06 19:32:24.677	\N	t	204	Apuração de ICMS DIFAL - Obrigações do ICMS Recolhido ou a Recolher
26	1	2025-01-06 19:34:17.473	\N	t	205	Sub-Apuração de ICMS - Ajuste da Sub-Apuração do ICMS
26	1	2025-01-06 19:35:10.628	\N	t	206	Sub-Apuração de ICMS - Informações Adicionais da Sub-Apuração
26	1	2025-01-06 19:35:40.776	\N	t	207	Sub-Apuração de ICMS - Obrigações do ICMS a Recolher Sub-Apuração
26	1	2025-01-06 19:36:01.245	\N	t	208	Sub-Apuração de ICMS - Sub-Apuração do ICMS
26	1	2025-01-06 19:37:26.225	\N	t	209	Apuração IPI - Ajuste de IPI
26	1	2025-01-06 19:37:43.432	\N	t	210	Apuração IPI - Apuração IPI
26	1	2025-01-06 19:39:15.681	\N	t	211	Tabelas Fiscais - ICMS - Cálculo de ICMS
26	1	2025-01-06 19:39:55.696	\N	t	212	Tabelas Fiscais - ICMS - Cadastro de CSOSN
26	1	2025-01-06 19:40:16.37	\N	t	213	Tabelas Fiscais - ICMS - Cadastro de CST de ICMS
26	1	2025-01-06 19:40:43.235	\N	t	214	Tabelas Fiscais - ICMS - Códigos de Ajustes de ICMS
26	1	2025-01-06 19:41:14.132	\N	t	215	Tabelas Fiscais - ICMS - Código de Receita de ICMS
26	1	2025-01-06 19:41:54.123	\N	t	216	Tabelas Fiscais - ICMS - Pauta Substituição Tributaria
26	1	2025-01-06 19:42:18.984	\N	t	217	Tabelas Fiscais - ICMS - Redução Base Calculo ICMS
26	1	2025-01-06 19:43:04.574	\N	t	220	Tabelas Fiscais - ICMS - Código Beneficio Fiscal
26	1	2025-01-06 19:43:53.029	\N	t	221	Tabelas Fiscais - ICMS - MVA - Margem de valor Agregado
26	1	2025-01-06 19:44:16.381	\N	t	222	Tabelas Fiscais - ICMS - Observações do Lançamento Fiscal
26	1	2025-01-06 19:44:55.26	\N	t	223	Tabelas Fiscais - ICMS - Tabela de Código/Beneficio/Incentivo
26	1	2025-01-06 19:45:48.856	\N	t	224	Tabelas Fiscais - ICMS - Movimentos de Restituição ou Complemento
26	1	2025-01-06 19:46:15.764	\N	t	225	Tabelas Fiscais - ICMS - Código Agregado - Sped Fiscal 1400
26	1	2025-01-06 19:48:39.001	\N	t	227	Tabelas Fiscais - IPI - Cadastro de CST de IPI
26	1	2025-01-06 19:48:55.635	\N	t	228	Tabelas Fiscais - IPI - Classes de IPI
26	1	2025-01-06 19:49:12.385	\N	t	229	Tabelas Fiscais - IPI - Selos de IPI
26	1	2025-01-06 19:49:33.556	\N	t	230	Tabelas Fiscais - IPI - Codigo de Enquadramento Legal do IPI
26	1	2025-01-06 19:48:21.568	\N	t	226	Tabelas Fiscais - IPI - Cálculo de IPI
26	1	2025-01-06 19:52:32.924	\N	t	231	Tabelas Fiscais - PIS/COFINS - Cadastro de CST PIS/COFINS
26	1	2025-01-06 20:25:45.215	\N	t	232	Tabelas Fiscais - PIS/COFINS - Código de Tipo De Crédito PIS/COFINS
26	1	2025-01-06 20:26:06.406	\N	t	233	Tabelas Fiscais - PIS/COFINS - Natureza da Receita PIS/COFINS
26	1	2025-01-06 20:27:43.918	\N	t	234	Tabelas Fiscais - PIS/COFINS - Código de Base de Cálculo do Crédito
26	1	2025-01-06 20:28:17.927	\N	t	235	Tabelas Fiscais - PIS/COFINS - Cadastro de Figura Fiscal
26	1	2025-01-06 20:28:45.309	\N	t	236	Tabelas Fiscais - PIS/COFINS - Código Atividade Previdenciária 
26	1	2025-01-07 12:26:14.478	\N	t	244	Tabelas Fiscais - Motivos de Participação dos Municípios
26	1	2025-01-07 12:19:27.787	\N	t	237	Tabelas Fiscais - Cadastro de NCM
26	1	2025-01-07 12:19:52.846	\N	t	238	Tabelas Fiscais - Cadastro CNAE
26	1	2025-01-07 12:22:38.04	\N	t	239	Tabelas Fiscais -  CFOP / Natureza de Operação
26	1	2025-01-07 12:23:03.721	\N	t	240	Tabelas Fiscais - Modelos de Documentos Fiscais
26	1	2025-01-07 12:23:34.925	\N	t	241	Tabelas Fiscais - Código Especificador da Substituição Tributaria
26	1	2025-01-07 12:24:22.718	\N	t	242	Tabelas Fiscais - Plano de Contas Contábeis
26	1	2025-01-07 12:25:08.157	\N	t	243	Tabelas Fiscais - Cadastro de Subtipo de Operações
26	1	2025-01-07 12:29:24.506	\N	t	245	Controles Fiscais - Períodos dispensados EFD Contribuições
26	1	2025-01-07 12:29:46.333	\N	t	246	Controles Fiscais - Ajuste de Créditos Contribuições
26	1	2025-01-07 12:30:20.793	\N	t	247	Controles Fiscais - Ajustes da Base de Cálculo da Contribuição
26	1	2025-01-07 12:31:15.727	\N	t	248	Controles Fiscais - Controle de Créditos Contribuições
26	1	2025-01-07 12:31:32.473	\N	t	249	Controles Fiscais - Controle de Créditos Retidos
26	1	2025-01-07 12:32:18.081	\N	t	250	Controles Fiscais - Ajustes de Contribuição Apuração
26	1	2025-01-07 12:32:43.952	\N	t	251	Controles Fiscais - Informações Adicionais de Diferimento
26	1	2025-01-07 12:33:47.013	\N	t	252	Controles Fiscais - Sociedades Cooperativas - Exclusões
26	1	2025-01-07 12:34:14.682	\N	t	253	Controles Fiscais - Ajuste da Contribuição Previdenciária 
26	1	2025-01-07 12:34:45.992	\N	t	254	Controles Fiscais - Manutenção de DF-e Inutilizados
26	1	2025-01-07 12:35:09.402	\N	t	255	Controles Fiscais - Documentos Utilizados
26	1	2025-01-07 12:35:39.4	\N	t	256	Controles Fiscais - Composição das Receitas do Período
26	1	2025-01-07 12:36:05.58	\N	t	257	Controles Fiscais - Crédito Presumido sobre Estoque de Abertura
26	1	2025-01-07 12:36:38.557	\N	t	258	Controles Fiscais - Cadastro de Bens Incorporados (F120/F130)
27	1	2025-01-07 16:01:14.119	\N	t	259	Função Acesso - Grupo Função Acesso
27	1	2025-01-07 16:01:31.928	\N	t	260	Função Acesso - Cadastro Função Acesso
27	1	2025-01-07 16:01:46.674	\N	t	261	Função Acesso - Cadastro de Ações
27	1	2025-01-07 16:02:19.685	\N	t	262	Grupo - Grupo Usuário 
27	1	2025-01-07 16:02:44.714	\N	t	263	Grupo - Grupo x Função Acesso
27	1	2025-01-07 16:03:27.138	\N	t	264	Usuários - Cadastro Usuários
27	1	2025-01-07 16:03:47.222	\N	t	265	Usuários - Usuários x Função de Usuários
27	1	2025-01-07 16:04:05.555	\N	t	266	Usuários - Usuários x Ações
27	1	2025-01-07 16:04:20.188	\N	t	267	Log do Sistema
28	1	2025-01-07 16:05:11.693	\N	t	268	Parâmetro Grupo
28	1	2025-01-07 16:05:23.059	\N	t	269	Parâmetro
28	1	2025-01-07 16:05:32.915	\N	t	270	Parâmetro Valor
28	1	2025-01-07 16:05:49.139	\N	t	271	Controle do Sistema
28	1	2025-01-07 16:06:06.106	\N	t	272	Pesquisa Personalizada
29	1	2025-01-07 16:07:23.731	\N	t	273	Agenda de Contatos
29	1	2025-01-07 16:08:14.796	\N	t	274	Chave de Liberação
29	1	2025-01-07 16:08:33.636	\N	t	275	Configurações
29	1	2025-01-07 16:09:53.167	\N	t	276	Cópia de Segurança
29	1	2025-01-07 16:10:12.202	\N	t	277	Sequência de Tabelas
29	1	2025-01-07 16:10:30.482	\N	t	278	Corrigir Saldo Inicial de Estoque 
29	1	2025-01-07 16:11:03.386	\N	t	279	Cadastro de Revenda
29	1	2025-01-07 16:29:57.703	\N	t	280	Atualização de Cálculo de Preço
30	1	2025-01-07 16:30:47.089	\N	t	281	Importar Licença
31	4	2025-01-10 19:59:15.718	\N	t	282	Contagem Cega
32	4	2025-01-10 19:59:30.076	\N	t	283	Auditar Preços
33	12	2025-01-10 20:19:08.654	\N	t	284	Orçamento (DAV)
33	12	2025-01-10 20:19:27.564	\N	t	285	Pré-Venda
33	12	2025-01-10 20:20:03.632	\N	t	286	Condicional
33	12	2025-01-10 20:21:39.324	\N	t	288	Consulta Produtos
33	12	2025-01-10 20:21:55.105	\N	t	289	Consulta Clientes
33	12	2025-01-10 20:23:35.83	\N	t	290	Consulta Serial
33	12	2025-01-10 20:23:54.217	\N	t	291	Consulta Kit
34	12	2025-01-10 20:37:13.286	\N	t	293	Ordem de Serviço
34	12	2025-01-10 20:36:49.786	\N	t	292	Agendamentos de Serviços
\.


--
-- Data for Name: mv_aula; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.mv_aula (id_mv_aula, id_sistema, id_modulo, id_aula, id_usuario, id_franquia, data_visto, data_inativo, status, id_submodulo) FROM stdin;
\.


--
-- Data for Name: mv_faq; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.mv_faq (id_mv_faq, id_faq, id_sistema, id_modulo, id_aula, id_usuario, id_franquia, data_visto, data_inativo, status, id_submodulo) FROM stdin;
\.


--
-- Data for Name: mv_prova; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.mv_prova (id_mv_prova, id_sistema, id_modulo, id_usuario, id_franquia, id_prova, nota, data_visto, data_inativo, status, id_submodulo) FROM stdin;
4	1	22	10	1	8	90	2025-01-13 15:36:06.813	\N	t	151
\.


--
-- Data for Name: mv_questao; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.mv_questao (id_mv_questao, id_sistema, id_modulo, id_aula, id_prova, id_usuario, id_franquia, id_questao, certo_errado, data_visto, data_inativo, status, id_submodulo) FROM stdin;
5	1	22	\N	8	10	1	4	C	2025-01-13 15:36:06.644	\N	t	151
6	1	22	\N	8	10	1	5	E	2025-01-13 15:36:06.683	\N	t	151
7	1	22	\N	8	10	1	6	C	2025-01-13 15:36:06.697	\N	t	151
8	1	22	\N	8	10	1	7	C	2025-01-13 15:36:06.707	\N	t	151
9	1	22	\N	8	10	1	8	C	2025-01-13 15:36:06.716	\N	t	151
10	1	22	\N	8	10	1	10	C	2025-01-13 15:36:06.724	\N	t	151
11	1	22	\N	8	10	1	11	C	2025-01-13 15:36:06.735	\N	t	151
12	1	22	\N	8	10	1	12	C	2025-01-13 15:36:06.743	\N	t	151
13	1	22	\N	8	10	1	13	C	2025-01-13 15:36:06.75	\N	t	151
14	1	22	\N	8	10	1	14	C	2025-01-13 15:36:06.758	\N	t	151
15	1	22	\N	8	13	1	4	E	2025-01-15 12:59:37.98	\N	t	151
16	1	22	\N	8	13	1	5	E	2025-01-15 12:59:38.004	\N	t	151
17	1	22	\N	8	13	1	6	E	2025-01-15 12:59:38.041	\N	t	151
18	1	22	\N	8	13	1	7	E	2025-01-15 12:59:38.053	\N	t	151
19	1	22	\N	8	13	1	8	E	2025-01-15 12:59:38.062	\N	t	151
20	1	22	\N	8	13	1	10	E	2025-01-15 12:59:38.072	\N	t	151
21	1	22	\N	8	13	1	11	E	2025-01-15 12:59:38.08	\N	t	151
22	1	22	\N	8	13	1	12	E	2025-01-15 12:59:38.088	\N	t	151
23	1	22	\N	8	13	1	13	E	2025-01-15 12:59:38.096	\N	t	151
24	1	22	\N	8	13	1	14	E	2025-01-15 12:59:38.104	\N	t	151
\.


--
-- Data for Name: mv_release; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.mv_release (id_mv_release, id_release, id_usuario, data_visto) FROM stdin;
6	9	10	2025-01-13 15:47:32.662
7	9	13	2025-01-13 15:56:20.223
\.


--
-- Data for Name: mv_video; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.mv_video (id_mv_video, id_sistema, id_modulo, id_aula, id_usuario, id_franquia, id_video, data_visto, data_inativo, status, id_submodulo) FROM stdin;
11	1	22	\N	10	1	7	2025-01-09 12:48:38.882	\N	t	150
12	1	22	\N	10	1	8	2025-01-13 15:45:54.358	\N	t	155
\.


--
-- Data for Name: planejamento; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.planejamento (id_planejamento, nome_planejamento, id_sistema, id_modulo, id_submodulo, id_usuario, modulo_novo, previsao_inicio, previsao_fim, etapa_elicitacao, etapa_roteiro, etapa_video, etapa_validacao, etapa_finalizado, proposta, roteiro, impedimentos, observacoes, data_criacao, data_inativo, status) FROM stdin;
9	Cadastro de filial 	1	15	11	10	t	2025-01-06 00:00:00	2025-01-06 00:00:00	t	t	t	f	f	pro	.	impedi	obs.:	2025-01-06 12:47:42.589	\N	t
10	Obrigações do ICMS Recolhido ou a Recolher	1	26	204	10	f	2025-01-06 00:00:00	2025-01-06 00:00:00	t	t	t	t	t	proposta	.			2025-01-06 13:14:11.129	\N	t
\.


--
-- Data for Name: prova; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.prova (id_prova, id_sistema, id_modulo, nome_prova, cliente, data_criacao, data_inativo, status, id_submodulo) FROM stdin;
8	1	22	Prova Modulo Gerencial - Fluxo de Caixa	f	2025-01-08 11:37:24.212	\N	t	151
\.


--
-- Data for Name: questao; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.questao (id_questao, id_sistema, id_modulo, id_aula, questao, "alternativa_A", "alternativa_B", "alternativa_C", "alternativa_D", correta, observacao, "order", data_criacao, data_inativo, status, id_submodulo, id_prova) FROM stdin;
11	1	22	\N	O que deve ser configurado na Categoria de Plano de Contas para o correto funcionamento financeiro?	a) Saldo inicial e final do período\n	b) Tipo, classificação e grupo de receita/despesa\n	c) O fluxo de caixa da empresa\n	d) A lista de fornecedores cadastrados	B		\N	2025-01-08 12:35:40.197	\N	t	150	8
13	1	22	\N	O que deve ser configurado corretamente no Plano de Contas para garantir a exibição de informações nos relatórios financeiros?\n	a) Nível, tipo e categoria\n	b) Apenas os saldos finais\n	c) Data inicial e final das transações	d) O nome dos centros de custo	A		\N	2025-01-08 12:38:04.94	\N	t	150	8
14	1	22	\N	O sistema permite que novos grupos de plano de contas sejam cadastrados. Qual é a vantagem dessa funcionalidade?\n	a) Atualizar automaticamente o fluxo de caixa	b) Criar categorias específicas para melhor organização das receitas e despesas\n	c) Garantir que todas as despesas sejam pagas no prazo correto\n	d) Gerar relatórios financeiros automaticamente	B		\N	2025-01-08 12:38:58.426	\N	t	150	8
12	1	22	\N	Qual é o objetivo de um Centro de Custo dentro da gestão financeira de uma empresa?\n	a) Automatizar pagamentos e recebimentos\n	b) Agregar despesas e receitas relacionadas a uma atividade ou departamento específico\n	c) Calcular o lucro mensal da empresa\n	d) Organizar as formas de pagamento disponíveis	B		\N	2025-01-08 12:36:42.954	\N	t	150	8
10	1	22	\N	Qual é a finalidade de configurar a [Conta de Venda] cadastrada no plano de contas?	a) Organizar os centros de custo existentes no sistema\n	b) Garantir que os valores de vendas sejam corretamente vinculados às categorias financeiras\n	c) Automatizar o pagamento de fornecedores\n	d) Dividir as despesas por departamento	B		\N	2025-01-08 12:34:30.713	\N	t	150	8
4	1	22	\N	O que é Fluxo de Caixa e qual é a sua principal função dentro da gestão financeira de uma empresa?	Medir a lucratividade da empresa	Monitorar as entradas e saídas de dinheiro ao longo de um período	Apenas registrar as vendas realizadas	Controlar apenas as despesas fixas	B		\N	2025-01-08 11:33:24.55	\N	t	151	8
5	1	22	\N	Qual das opções abaixo NÃO é um benefício do controle eficiente do Fluxo de Caixa?	Prever cenários financeiros futuros	Tomar decisões estratégicas fundamentadas	Aumentar automaticamente o faturamento da empresa	Evitar insolvência financeira	C		\N	2025-01-08 11:34:12.348	\N	t	151	8
7	1	22	\N	O que deve ser incluído na categoria de despesas no Fluxo de Caixa?	Vendas realizadas e recebimentos	Aluguel, salários, energia e compras de fornecedores	 Investimentos em novos produtos	Receita total obtida pela empresa	B		\N	2025-01-08 11:35:41.834	\N	t	151	8
8	1	22	\N	Como o Fluxo de Caixa pode ser apresentado em um sistema de controle financeiro?	Apenas em formato anual, mostrando o saldo consolidado do ano	Como uma lista de entradas e saídas sem permitir cálculos de saldo	Em formato semanal, apresentando entradas, saídas, saldo diário e total mensal	Apenas em formato gráfico, sem detalhamento dos valores	C		\N	2025-01-08 11:36:26.555	\N	t	151	8
6	1	22	\N	Em que situações o Fluxo de Caixa pode ajudar uma empresa a tomar decisões mais assertivas?	Ao identificar períodos de baixa nas entradas e ajustar o planejamento financeiro	Ao calcular o valor do imposto de renda a ser pago	Ao determinar o preço fixo dos produtos para venda	Ao prever o crescimento do mercado	A		\N	2025-01-08 11:35:03.793	\N	t	151	8
\.


--
-- Data for Name: release; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.release (id_release, numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, id_usuario, data_inclusao, data_inativo, status, finalizado) FROM stdin;
9	34	1.0.2.187	1.0.0.66	1.0.0.83	1.2.6.8	10	2025-01-06 12:45:46.335	\N	t	f
\.


--
-- Data for Name: release_item; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.release_item (id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo, correcao, alteracao, imagem, observacao, status) FROM stdin;
17	Foi criado o parâmetro “Nota fiscal de emissão - Exibir fatura no DANFE"	34	9	1	28	270	f	t	\N	<p>Quando o par&acirc;metro estiver marcado para [N&Atilde;O], o campo FATURA n&atilde;o ir&aacute; aparecer no DANF<img src="data:image/png;base64,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/u52ctWDBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWBgWfAAAAAAAABaGBR8AAAAAAICFYcEHAAAAAABgYVjwAQAAAAAAWJjhBZ+7zf8fRxewXmsZgFoAAAAASUVORK5CYII="></p>	t
16	DESCONTO ATÉ A DATA DE VENCIMENTO NO BOLETO	34	9	1	15	32	f	t	\N	<p>Foi criada a op&ccedil;&atilde;o de conceder desconto em BOLETOS at&eacute; a data do vencimento. Esse desconto ser&aacute; aplicado somente quando o pagamento for feito AT&Eacute; a data de vencimento do boleto. Primeiro precisa habilitar a op&ccedil;&atilde;o marcando o checkbox abaixo: Arquivo &gt; Outros &gt; Cadastro de Condi&ccedil;&otilde;es de Pagamento Ser&aacute; preciso definir qual Cedente/Boleto tem a possibilidade de aplicar desconto at&eacute; a data de vencimento. Ser&aacute; informado no cadastro de Cedente se permite aplicar desconto at&eacute; o vencimento e definir as instru&ccedil;&otilde;es que ser&atilde;o impressas no boleto informando valor e data limite para aplica&ccedil;&atilde;o do desconto.<img src="data:image/png;base64,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"></p>	t
18	ccfjfjggjgvjgvj	34	9	1	15	11	f	t	\N	C:\\ead\\backend\\src\\media\\releaseItem\\18.html	t
\.


--
-- Data for Name: sistema; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.sistema (id_sistema, nome_sistema, data_criacao, data_inativo, status) FROM stdin;
1	Gestores	2024-12-15 11:00:58.217	\N	t
4	UtilitariosMob	2024-12-18 15:22:50.809	\N	t
5	ControlaAqui	2024-12-18 21:51:25.872	\N	t
2	GestorPDV	2024-12-15 11:03:04.986	2024-12-21 21:00:27.499	t
3	GestorFood Mob	2024-12-18 15:15:31.456	2024-12-19 15:08:16.489	t
6	PedidoMob	2024-12-26 09:35:41.718	\N	t
7	BalcãoMob	2024-12-26 09:36:00.26	\N	t
8	SincData	2024-12-26 09:36:22.946	\N	t
9	CatalogoWeb	2024-12-26 09:36:39.379	\N	t
10	Portal Do Contador	2024-12-26 09:37:12.472	2024-12-27 08:52:21.414	t
11	MDe	2024-12-29 09:51:27.257	\N	t
12	Balcão	2025-01-10 20:09:42.617	\N	t
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.usuario (id_usuario, email, login, senha, id_franquia, data_criacao, data_inativo, status, nome_usuario, tipo_usuario) FROM stdin;
10	moura@hotmail.com	moura	$2a$08$i/XB8bZ3G6o9i5hhlnh94OzeS0tM3p3OWVLE9wN5z.ylNe9qZF0H.	1	2024-11-09 17:02:32.819	\N	t	Moura	ADMINISTRADOR
11	tecnico@hotmail.com	TECNICO	$2a$08$HSGBm3SkHkA28fDaRgCcneNCLPhkwDf2LcErdPWbC3.QI10AqTFoi	1	2024-12-11 22:40:51.411	\N	t	TECNICO	TECNICO
13	CQS@hotmail.com	CQS	$2a$08$goC7ZBtDpRxz4HqbW6O.7uviL0utj2lj9ckPSyoCxbnn2VdcT/YyO	1	2024-12-11 22:47:48.702	2024-12-28 22:51:22.999	t	CQS	CQS
12	SUPERVISOR@hotmail.com	SUPERVISOR	$2a$08$/ChRbeRiDCdgDurYQx/hmOPzt5wV1RFiHgnxSgmM4d72m6.5jHMDK	1	2024-12-11 22:45:56.06	2024-12-28 22:51:43.958	t	SUPERVISOR	SUPERVISOR
\.


--
-- Data for Name: video; Type: TABLE DATA; Schema: public; Owner: brajan
--

COPY public.video (id_video, id_sistema, id_modulo, id_aula, nome_video, link, observacao, "order", data_criacao, data_inativo, status, id_submodulo) FROM stdin;
8	1	22	\N	Análise de Produtos para Compra	https://youtu.be/KX3c089Xip0		0	2025-01-07 18:13:05.368	\N	t	155
9	1	22	\N	Análise de Produtos para Compra - Calculo da Sugestão	https://youtu.be/wDeAz32Guqk	Vídeo mostra como é feito o calculo.	0	2025-01-07 18:14:04.146	\N	t	155
7	1	22	\N	Dashboard	https://youtu.be/JUblgWiW0yU		0	2025-01-07 18:11:26.978	\N	t	150
\.


--
-- Name: aba_id_modulo_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.aba_id_modulo_seq', 35, true);


--
-- Name: aula_id_aula_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.aula_id_aula_seq', 5, true);


--
-- Name: faq_id_faq_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.faq_id_faq_seq', 23, true);


--
-- Name: franquia_id_franquia_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.franquia_id_franquia_seq', 26, true);


--
-- Name: modulo_id_submodulo_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.modulo_id_submodulo_seq', 293, true);


--
-- Name: mv_aula_id_mv_aula_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.mv_aula_id_mv_aula_seq', 5, true);


--
-- Name: mv_faq_id_mv_faq_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.mv_faq_id_mv_faq_seq', 15, true);


--
-- Name: mv_prova_id_mv_prova_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.mv_prova_id_mv_prova_seq', 4, true);


--
-- Name: mv_questao_id_mv_questao_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.mv_questao_id_mv_questao_seq', 24, true);


--
-- Name: mv_release_id_mv_release_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.mv_release_id_mv_release_seq', 7, true);


--
-- Name: mv_video_id_mv_video_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.mv_video_id_mv_video_seq', 12, true);


--
-- Name: planejamento_id_planejamento_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.planejamento_id_planejamento_seq', 10, true);


--
-- Name: prova_id_prova_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.prova_id_prova_seq', 8, true);


--
-- Name: questao_id_questao_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.questao_id_questao_seq', 14, true);


--
-- Name: release_id_release_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.release_id_release_seq', 9, true);


--
-- Name: release_item_id_item_release_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.release_item_id_item_release_seq', 18, true);


--
-- Name: sistema_id_sistema_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.sistema_id_sistema_seq', 12, true);


--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 14, true);


--
-- Name: video_id_video_seq; Type: SEQUENCE SET; Schema: public; Owner: brajan
--

SELECT pg_catalog.setval('public.video_id_video_seq', 9, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: aba aba_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aba
    ADD CONSTRAINT aba_pkey PRIMARY KEY (id_modulo);


--
-- Name: aula aula_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT aula_pkey PRIMARY KEY (id_aula);


--
-- Name: faq faq_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_pkey PRIMARY KEY (id_faq);


--
-- Name: franquia franquia_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.franquia
    ADD CONSTRAINT franquia_pkey PRIMARY KEY (id_franquia);


--
-- Name: modulo modulo_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.modulo
    ADD CONSTRAINT modulo_pkey PRIMARY KEY (id_submodulo);


--
-- Name: mv_aula mv_aula_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_pkey PRIMARY KEY (id_mv_aula);


--
-- Name: mv_faq mv_faq_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_pkey PRIMARY KEY (id_mv_faq);


--
-- Name: mv_prova mv_prova_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_pkey PRIMARY KEY (id_mv_prova);


--
-- Name: mv_questao mv_questao_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_pkey PRIMARY KEY (id_mv_questao);


--
-- Name: mv_release mv_release_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_release
    ADD CONSTRAINT mv_release_pkey PRIMARY KEY (id_mv_release);


--
-- Name: mv_video mv_video_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_pkey PRIMARY KEY (id_mv_video);


--
-- Name: planejamento planejamento_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.planejamento
    ADD CONSTRAINT planejamento_pkey PRIMARY KEY (id_planejamento);


--
-- Name: prova prova_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.prova
    ADD CONSTRAINT prova_pkey PRIMARY KEY (id_prova);


--
-- Name: questao questao_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao
    ADD CONSTRAINT questao_pkey PRIMARY KEY (id_questao);


--
-- Name: release_item release_item_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release_item
    ADD CONSTRAINT release_item_pkey PRIMARY KEY (id_item_release);


--
-- Name: release release_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release
    ADD CONSTRAINT release_pkey PRIMARY KEY (id_release);


--
-- Name: sistema sistema_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.sistema
    ADD CONSTRAINT sistema_pkey PRIMARY KEY (id_sistema);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- Name: video video_pkey; Type: CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_pkey PRIMARY KEY (id_video);


--
-- Name: usuario_email_key; Type: INDEX; Schema: public; Owner: brajan
--

CREATE UNIQUE INDEX usuario_email_key ON public.usuario USING btree (email);


--
-- Name: usuario_login_key; Type: INDEX; Schema: public; Owner: brajan
--

CREATE UNIQUE INDEX usuario_login_key ON public.usuario USING btree (login);


--
-- Name: aba aba_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aba
    ADD CONSTRAINT aba_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: aula aula_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT aula_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: aula aula_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT aula_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: aula aula_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.aula
    ADD CONSTRAINT aula_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: faq faq_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: faq faq_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: faq faq_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: faq faq_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: modulo modulo_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.modulo
    ADD CONSTRAINT modulo_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: modulo modulo_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.modulo
    ADD CONSTRAINT modulo_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_aula mv_aula_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_aula mv_aula_id_franquia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_id_franquia_fkey FOREIGN KEY (id_franquia) REFERENCES public.franquia(id_franquia) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_aula mv_aula_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_aula mv_aula_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_aula mv_aula_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_aula mv_aula_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_aula
    ADD CONSTRAINT mv_aula_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_faq_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_faq_fkey FOREIGN KEY (id_faq) REFERENCES public.faq(id_faq) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_franquia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_franquia_fkey FOREIGN KEY (id_franquia) REFERENCES public.franquia(id_franquia) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_faq mv_faq_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_faq
    ADD CONSTRAINT mv_faq_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_prova mv_prova_id_franquia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_id_franquia_fkey FOREIGN KEY (id_franquia) REFERENCES public.franquia(id_franquia) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_prova mv_prova_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_prova mv_prova_id_prova_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_id_prova_fkey FOREIGN KEY (id_prova) REFERENCES public.prova(id_prova) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_prova mv_prova_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_prova mv_prova_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_prova mv_prova_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_prova
    ADD CONSTRAINT mv_prova_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_questao mv_questao_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: mv_questao mv_questao_id_franquia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_franquia_fkey FOREIGN KEY (id_franquia) REFERENCES public.franquia(id_franquia) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_questao mv_questao_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_questao mv_questao_id_prova_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_prova_fkey FOREIGN KEY (id_prova) REFERENCES public.prova(id_prova) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: mv_questao mv_questao_id_questao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_questao_fkey FOREIGN KEY (id_questao) REFERENCES public.questao(id_questao) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_questao mv_questao_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_questao mv_questao_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_questao mv_questao_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_questao
    ADD CONSTRAINT mv_questao_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_release mv_release_id_release_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_release
    ADD CONSTRAINT mv_release_id_release_fkey FOREIGN KEY (id_release) REFERENCES public.release(id_release) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_release mv_release_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_release
    ADD CONSTRAINT mv_release_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_video mv_video_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: mv_video mv_video_id_franquia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_franquia_fkey FOREIGN KEY (id_franquia) REFERENCES public.franquia(id_franquia) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_video mv_video_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_video mv_video_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_video mv_video_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_video mv_video_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mv_video mv_video_id_video_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.mv_video
    ADD CONSTRAINT mv_video_id_video_fkey FOREIGN KEY (id_video) REFERENCES public.video(id_video) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: planejamento planejamento_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.planejamento
    ADD CONSTRAINT planejamento_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: planejamento planejamento_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.planejamento
    ADD CONSTRAINT planejamento_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: planejamento planejamento_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.planejamento
    ADD CONSTRAINT planejamento_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: planejamento planejamento_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.planejamento
    ADD CONSTRAINT planejamento_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: prova prova_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.prova
    ADD CONSTRAINT prova_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: prova prova_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.prova
    ADD CONSTRAINT prova_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: prova prova_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.prova
    ADD CONSTRAINT prova_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: questao questao_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao
    ADD CONSTRAINT questao_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: questao questao_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao
    ADD CONSTRAINT questao_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: questao questao_id_prova_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao
    ADD CONSTRAINT questao_id_prova_fkey FOREIGN KEY (id_prova) REFERENCES public.prova(id_prova) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: questao questao_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao
    ADD CONSTRAINT questao_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: questao questao_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.questao
    ADD CONSTRAINT questao_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: release release_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release
    ADD CONSTRAINT release_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: release_item release_item_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release_item
    ADD CONSTRAINT release_item_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: release_item release_item_id_release_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release_item
    ADD CONSTRAINT release_item_id_release_fkey FOREIGN KEY (id_release) REFERENCES public.release(id_release) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: release_item release_item_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release_item
    ADD CONSTRAINT release_item_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: release_item release_item_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.release_item
    ADD CONSTRAINT release_item_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: usuario usuario_id_franquia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_franquia_fkey FOREIGN KEY (id_franquia) REFERENCES public.franquia(id_franquia) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: video video_id_aula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_id_aula_fkey FOREIGN KEY (id_aula) REFERENCES public.aula(id_aula) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: video video_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.aba(id_modulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: video video_id_sistema_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_id_sistema_fkey FOREIGN KEY (id_sistema) REFERENCES public.sistema(id_sistema) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: video video_id_submodulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brajan
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_id_submodulo_fkey FOREIGN KEY (id_submodulo) REFERENCES public.modulo(id_submodulo) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

