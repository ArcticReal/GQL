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

const X509IssuerProvisionInputType = new GraphQLInputObjectType({
  name: 'X509IssuerProvisionInputType',
  description: 'input type for X509IssuerProvision',

  fields: () => ({
    certProvisionId: {type: GraphQLString},
    cityLocality: {type: GraphQLString},
    commonName: {type: GraphQLString},
    country: {type: GraphQLString},
    organizationName: {type: GraphQLString},
    organizationalUnit: {type: GraphQLString},
    serialNumber: {type: GraphQLString},
    stateProvince: {type: GraphQLString}
  })
});

export {X509IssuerProvisionInputType};
    