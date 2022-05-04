USE [DAI-Personaje]
GO
CREATE TABLE [dbo].[personaje](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](2048) NOT NULL,
	[nombre] [nchar](10) NOT NULL,
	[edad] [int] NOT NULL,
	[peso] [int] NOT NULL,
	[historia] [text] NOT NULL,
 CONSTRAINT [PK_personaje] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[personaje] ON 

INSERT [dbo].[personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (1, N'dsdsd', N'pepe', 1, 67, N'kjkjsajks')
SET IDENTITY_INSERT [dbo].[personaje] OFF
GO
USE [master]
GO
ALTER DATABASE [DAI-Personaje] SET  READ_WRITE 
GO
