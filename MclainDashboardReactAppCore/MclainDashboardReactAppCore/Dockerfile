FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /src
COPY ["MclainDashboardReactAppCore/MclainDashboardReactAppCore.csproj", "MclainDashboardReactAppCore/"]
RUN dotnet restore "MclainDashboardReactAppCore/MclainDashboardReactAppCore.csproj"
COPY . .
WORKDIR "/src/MclainDashboardReactAppCore"
RUN dotnet build "MclainDashboardReactAppCore.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "MclainDashboardReactAppCore.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MclainDashboardReactAppCore.dll"]