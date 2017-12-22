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

const DataTemplateTypeResponseType = new GraphQLObjectType({
  name: 'DataTemplateTypeResponseType',
  description: 'response type for DataTemplateType',

  fields: () => ({
    dataTemplateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    extension: {type: GraphQLString}
  })
});

export {DataTemplateTypeResponseType};
    