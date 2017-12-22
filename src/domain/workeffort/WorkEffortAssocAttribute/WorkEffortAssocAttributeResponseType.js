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

const WorkEffortAssocAttributeResponseType = new GraphQLObjectType({
  name: 'WorkEffortAssocAttributeResponseType',
  description: 'response type for WorkEffortAssocAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString},
    workEffortIdFrom: {type: GraphQLString},
    workEffortIdTo: {type: GraphQLString}
  })
});

export {WorkEffortAssocAttributeResponseType};
    