
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



const X509IssuerProvisionType = new GraphQLObjectType({
  name: 'X509IssuerProvisionType',
  description: 'Type for X509IssuerProvision in login',

  fields: () => ({
    certProvisionId: {type: GraphQLString},
    commonName: {type: GraphQLString},
    country: {type: GraphQLString},
    serialNumber: {type: GraphQLString},
    organizationName: {type: GraphQLString},
    cityLocality: {type: GraphQLString},
    stateProvince: {type: GraphQLString},
    organizationalUnit: {type: GraphQLString}
  })
});

export {X509IssuerProvisionType};
    