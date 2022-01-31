# OnlyOne Subgraph

## Get started

**Required**: 
- Node.js
- Yarn
- Docker
  
## Before all
Install graph-cli globally ``npm install -g @graphprotocol/graph-cli``

Install all project dependencies by running ```yarn``` in root of project

## Basic commands 
 - ```yarn prepare:{networkName}``` - generates subgraph manifest file, based on specified network`s config 
 - ```graph codegen``` - generates contract and schema entities based on subgraph manifest
 - ```yarn build``` - performs build of subgraph 
 - ```yarn run deploy {GITHUB_USER}/{SUBGRAPH_NAME}``` - deploys subgraph to hosted services. **Don`t forget to execute ```yarn prepare``` first!**

To deploy subgraph to hosted service You need to create it first

https://thegraph.com/hosted-service/dashboard
# For local development

## Step № 0: Run your local blockchain node

Hardhat, Ganache etc. 
And deploy all contracts to it of course :)

## Step № 1: Run local graph node

Run ``docker-compose up``

## Step № 2: Prepare graph for deployment

1. Create ``config/local.json`` file from ``config/local.example.json``
3. Run ``yarn prepare:local``
4. (optional step) Run ``yarn build`` just to be sure, that everything compiles correctly

## Step № 3: Deploy graph 
1. Run ``yarn create-local`` to create subgraph on your local graph node
2. Run ``yarn deploy-local`` to deploy subgraph to your local graph node

If you want to remove deployed subgraph - execute ``yarn remove-local``

---
Now you can explore your SubGraph in any way you want :)

GraphQl:
http://127.0.0.1:8000/subgraphs/name/RedDuck-Software/OnlyOne/

Note: after restarting your ethereum node, 
you`ll probably want to reset all indexed data from your subgraph. 
Just run ``docker-compose down``, remove ``/data`` folder 
and start all over again :)  
