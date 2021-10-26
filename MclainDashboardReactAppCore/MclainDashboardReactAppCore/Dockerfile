

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
RUN echo $(ls -l /app)
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
RUN echo $(ls -l /src)

COPY ["MclainDashboardReactAppCore", "/src/MclainDashboardReactAppCore/"]

WORKDIR "/src/MclainDashboardReactAppCore"
RUN echo $(ls -l /src/MclainDashboardReactAppCore)

RUN dotnet restore "MclainDashboardReactAppCore.csproj"
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MclainDashboardReactAppCore.dll"]