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

const WorkEffortAssocAttributeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAssocAttributeInputType',
  description: 'input type for WorkEffortAssocAttribute',

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

export {WorkEffortAssocAttributeInputType};
    