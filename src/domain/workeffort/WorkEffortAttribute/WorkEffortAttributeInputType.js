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

const WorkEffortAttributeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAttributeInputType',
  description: 'input type for WorkEffortAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortAttributeInputType};
    