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

const PostalAddressBoundaryResponseType = new GraphQLObjectType({
  name: 'PostalAddressBoundaryResponseType',
  description: 'response type for PostalAddressBoundary',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    geoId: {type: GraphQLString}
  })
});

export {PostalAddressBoundaryResponseType};
    