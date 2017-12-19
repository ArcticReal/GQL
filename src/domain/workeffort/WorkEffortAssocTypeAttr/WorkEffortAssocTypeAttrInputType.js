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

const WorkEffortAssocTypeAttrInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAssocTypeAttrInputType',
  description: 'input type for WorkEffortAssocTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString}
  })
});

export {WorkEffortAssocTypeAttrInputType};
    