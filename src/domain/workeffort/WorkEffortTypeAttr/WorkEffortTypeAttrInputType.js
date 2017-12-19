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

const WorkEffortTypeAttrInputType = new GraphQLInputObjectType({
  name: 'WorkEffortTypeAttrInputType',
  description: 'input type for WorkEffortTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString}
  })
});

export {WorkEffortTypeAttrInputType};
    