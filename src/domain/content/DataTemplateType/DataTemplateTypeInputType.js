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

const DataTemplateTypeInputType = new GraphQLInputObjectType({
  name: 'DataTemplateTypeInputType',
  description: 'input type for DataTemplateType',

  fields: () => ({
    dataTemplateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    extension: {type: GraphQLString}
  })
});

export {DataTemplateTypeInputType};
    