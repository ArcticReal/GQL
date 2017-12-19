import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const WorkReqFulfTypeInputType = new GraphQLInputObjectType({
  name: 'WorkReqFulfTypeInputType',
  description: 'input type for WorkReqFulfType',

  fields: () => ({
    description: {type: GraphQLString},
    workReqFulfTypeId: {type: GraphQLString}
  })
});

export {WorkReqFulfTypeInputType};
    