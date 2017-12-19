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

const DataResourcePurposeInputType = new GraphQLInputObjectType({
  name: 'DataResourcePurposeInputType',
  description: 'input type for DataResourcePurpose',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString}
  })
});

export {DataResourcePurposeInputType};
    