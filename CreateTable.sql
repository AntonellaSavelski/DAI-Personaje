USE [DAI-Personaje]
GO
/****** Object:  User [Personaje]    Script Date: 13/05/2022 08:55:47 p. m. ******/
CREATE USER [Personaje] FOR LOGIN [Personaje] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personaje]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 13/05/2022 08:55:47 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[idPeli] [int] IDENTITY(1,1) NOT NULL,
	[imagenPelicula] [varchar](2048) NOT NULL,
	[titulo] [varchar](50) NOT NULL,
	[fechaCreacion] [varchar](50) NOT NULL,
	[calificacion] [int] NOT NULL,
 CONSTRAINT [PK_Pelicula] PRIMARY KEY CLUSTERED 
(
	[idPeli] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[personaje]    Script Date: 13/05/2022 08:55:47 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[personaje](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](2048) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[edad] [int] NOT NULL,
	[peso] [int] NOT NULL,
	[historia] [varchar](2048) NOT NULL,
 CONSTRAINT [PK_personaje] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajeXPelicula]    Script Date: 13/05/2022 08:55:47 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajeXPelicula](
	[idPersonaje] [int] NOT NULL,
	[idPelicula] [int] NOT NULL,
 CONSTRAINT [PK_PersonajeXPelicula] PRIMARY KEY CLUSTERED 
(
	[idPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Pelicula] ON 

INSERT [dbo].[Pelicula] ([idPeli], [imagenPelicula], [titulo], [fechaCreacion], [calificacion]) VALUES (1, N'https://images.app.goo.gl/s6NPU7eYiYBC22yF6', N'Los Simpsons', N'2007', 4)
INSERT [dbo].[Pelicula] ([idPeli], [imagenPelicula], [titulo], [fechaCreacion], [calificacion]) VALUES (2, N'https://images.app.goo.gl/L34gW9fWfdneCAUb8', N'Titanic', N'1997', 5)
INSERT [dbo].[Pelicula] ([idPeli], [imagenPelicula], [titulo], [fechaCreacion], [calificacion]) VALUES (3, N'https://images.app.goo.gl/5QkFkCWMvkuqPx16A', N'Superman', N'1978', 3)
SET IDENTITY_INSERT [dbo].[Pelicula] OFF
SET IDENTITY_INSERT [dbo].[personaje] ON 

INSERT [dbo].[personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (1, N'https://images.app.goo.gl/GwSuUcx6uUKTfb617', N'HomeroSimpson', 65, 108, N'Padre de familia')
INSERT [dbo].[personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (3, N'https://images.app.goo.gl/gsK9hxnSnobVwimu7', N'ChristopherReeve', 52, 77, N'Superheroe')
INSERT [dbo].[personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (7, N'https://images.app.goo.gl/4Rn698jbwCze9bt18', N'KateWinslet', 56, 63, N'Mujer enamorada')
SET IDENTITY_INSERT [dbo].[personaje] OFF
INSERT [dbo].[PersonajeXPelicula] ([idPersonaje], [idPelicula]) VALUES (1, 1)
INSERT [dbo].[PersonajeXPelicula] ([idPersonaje], [idPelicula]) VALUES (7, 2)
INSERT [dbo].[PersonajeXPelicula] ([idPersonaje], [idPelicula]) VALUES (3, 3)
ALTER TABLE [dbo].[PersonajeXPelicula]  WITH CHECK ADD  CONSTRAINT [FK_PersonajeXPelicula_Pelicula] FOREIGN KEY([idPelicula])
REFERENCES [dbo].[Pelicula] ([idPeli])
GO
ALTER TABLE [dbo].[PersonajeXPelicula] CHECK CONSTRAINT [FK_PersonajeXPelicula_Pelicula]
GO
ALTER TABLE [dbo].[PersonajeXPelicula]  WITH CHECK ADD  CONSTRAINT [FK_PersonajeXPelicula_personaje] FOREIGN KEY([idPersonaje])
REFERENCES [dbo].[personaje] ([id])
GO
ALTER TABLE [dbo].[PersonajeXPelicula] CHECK CONSTRAINT [FK_PersonajeXPelicula_personaje]
GO
USE [master]
GO
ALTER DATABASE [DAI-Personaje] SET  READ_WRITE 
GO
