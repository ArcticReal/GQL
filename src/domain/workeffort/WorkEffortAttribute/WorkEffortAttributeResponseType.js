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

const WorkEffortAttributeResponseType = new GraphQLObjectType({
  name: 'WorkEffortAttributeResponseType',
  description: 'response type for WorkEffortAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortAttributeResponseType};
    