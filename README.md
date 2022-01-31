# OnlyOne Subgraph


## Get started

**Required**: 
- Node.js
- Yarn
- Docker


## Step № 1: Run local graph node

Run ``docker-compose up``

## Step № 2: Install graph-cli globally

``npm install -g @graphprotocol/graph-cli``

## Step № 3: Prepare graph for deployment

1. Create ``config/local.json`` file from ``config/local.example.json``
3. Run ``yarn prepare:local``
4. (optional step) Run ``yarn build`` just to be sure, that everything compiles correctly
5. Run ``yarn create-local`` to create subgraph on your local graph node
6. Run ``yarn deploy-local`` to deploy subgraph to your local graph node

==============

Now you can explore your SubGraph in any way you want :)

GraphQl:
http://127.0.0.1:8000/subgraphs/name/RedDuck-Software/OnlyOne/

Note: after restarting your ethereum node, 
you`ll probably want to reset all indexed data from your subgraph. 
Just run ``docker-compose down``, remove ``/data`` folder 
and start all over again :)  
