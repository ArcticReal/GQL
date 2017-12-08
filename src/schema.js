//External Imports
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

//Mutations
import {mutationFields} from './framework/mutationBuilder.js';

//Queries
import {queryFields} from './framework/queryBuilder.js';


const RootQueryType = new GraphQLObjectType({
  name: 'rootQueries',
  description: '...',

  fields: () => (
    queryFields
  )
});

const MutationType = new GraphQLObjectType({
  name: 'Mutations',
  description: 'root for mutations',

  fields: () => (
    mutationFields
  )
});

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType,
});
