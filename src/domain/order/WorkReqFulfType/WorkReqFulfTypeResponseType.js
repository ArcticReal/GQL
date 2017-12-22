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

const WorkReqFulfTypeResponseType = new GraphQLObjectType({
  name: 'WorkReqFulfTypeResponseType',
  description: 'response type for WorkReqFulfType',

  fields: () => ({
    description: {type: GraphQLString},
    workReqFulfTypeId: {type: GraphQLString}
  })
});

export {WorkReqFulfTypeResponseType};
    