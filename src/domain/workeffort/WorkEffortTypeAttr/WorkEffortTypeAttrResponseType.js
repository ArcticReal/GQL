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

const WorkEffortTypeAttrResponseType = new GraphQLObjectType({
  name: 'WorkEffortTypeAttrResponseType',
  description: 'response type for WorkEffortTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString}
  })
});

export {WorkEffortTypeAttrResponseType};
    